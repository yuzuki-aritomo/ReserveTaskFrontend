import { FC, useContext } from 'react'
import { Row, Col } from "react-bootstrap"
import styles from "styles/calWeek.module.css"
import { ReceptionData } from 'Models/ReceptionModel'
import { ReceptionContext } from 'src/components/calendar_week/WeekCalendarProvider'
import { EditFlagContext, PostReceptionsContext, setPostReceptionsContext } from 'src/components/calendar_week/WeekCalendarProvider'

//受付時間編集中
type EditCalTime = {
  reception:  ReceptionData | undefined;
  dt: string;
}
const EditCalTime: FC<EditCalTime> = ( props ) =>{
  const postReceptions = useContext(PostReceptionsContext)
  const setPostReceptions = useContext(setPostReceptionsContext)
  const handlePostReceptions = () => {
    if( postReceptions.includes(props.dt) ){
      const newPostReceptions = postReceptions.filter(r => r!==props.dt)
      setPostReceptions(newPostReceptions)
    }else{
      setPostReceptions([ ...postReceptions, props.dt ])
    }
    console.log(postReceptions)
  }
  if (!props.reception){
    return(
      <div className={ styles.cal_time } onClick={ handlePostReceptions }>
        {postReceptions.includes(props.dt) &&
          '○'
        }
      </div>
    )
  }else if (props.reception.reserved){
    return(
      <div className={ styles.cal_time }>
        予約完了
      </div>
    )
  }else{
    return(
      <div className={ styles.cal_time }>
        予約受付中
      </div>
    )
  }
}


//時間単位
type CalTimeProps = {
  day: string,
  time: string,
}
const CalTime: FC<CalTimeProps> = (props) => {
  const dt = new Date(props.day)
  const time = props.time.slice(0, -1)
  dt.setHours(Number(time.split(":")[0]))
  dt.setMinutes(Number(time.split(":")[1]))
  const dt_ISOS = dt.toISOString()
  const receptions = useContext(ReceptionContext)
  const reception = receptions.find(r => r.start===dt_ISOS)

  const EditFlag = useContext(EditFlagContext)
  if(EditFlag){
    return <EditCalTime reception={ reception } dt={dt_ISOS} />
  }else if (!reception){
    return(
      <div className={ styles.cal_time }>
      </div>
    )
  }else if (reception.reserved){
    return(
      <div className={ styles.cal_time }>
        { reception.user_name }
      </div>
    )
  }else{
    return(
      <div className={ styles.cal_time }>
        予約受付中
      </div>
    )
  }
}

//日単位
type CalDayProps = {
  titleFlag: boolean,
  day: string,
}
const CalDay: FC<CalDayProps> = ( props ) => {
  const timeline = [
    '10:00~', '10:30~',
    '11:00~', '11:30~',
    '12:00~', '12:30~',
    '13:00~', '13:30~',
    '14:00~', '14:30~',
    '15:00~', '15:30~',
    '16:00~', '16:30~',
    '17:00~', '17:30~',
  ]
  const dt = new Date(props.day)
  const m = dt.getMonth()+1
  const d = dt.getDate()
  const format_day: string = m+"/"+d
  return(
    <div>
      { props.titleFlag && 
        <div className={ styles.cal_time }></div>
      }
      { props.titleFlag && 
        timeline.map((value, index) => 
          <div className={ styles.cal_time } key={index}>{value}</div> 
        )
      }
      { !props.titleFlag && 
        <div className={ styles.cal_time }>{ format_day }</div>
      }
      { !props.titleFlag && 
        timeline.map((value, index) => 
          <CalTime key={index} day={props.day} time={ value }/> 
        )
      }
    </div>
  )
}

//週単位
type CalWeekProps = {
  weekDays: string[],
}
export const CalWeek: FC<CalWeekProps> = (props) => {
  return(
    <div>
      <Row className="justify-content-md-center mt-4">
        <Col md={4} className={ styles.cal_day }>
          <CalDay titleFlag={ true } day="" />
        </Col>
        { 
          props.weekDays.map((value, index) => 
            <Col md={4} className={ styles.cal_day } key={ index }>
              <CalDay titleFlag={ false } day={ value }/>
            </Col>
          )
        }
      </Row>
    </div>
  )
}