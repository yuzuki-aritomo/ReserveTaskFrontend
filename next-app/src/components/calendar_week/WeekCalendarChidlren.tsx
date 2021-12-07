import { FC, useContext } from 'react'
import { Row, Col } from "react-bootstrap"
import styles from "styles/calWeek.module.css"
import { ModeContext} from 'src/components/calendar_week/WeekCalendarProvider'
import { CalTimeFpReception, CalTimeUserReception, CalTimeUserReservation } from 'src/components/calendar_week/WeekCalendarTime'

//時間単位
type CalTimeProps = {
  day: string,
  time: string,
}
const CalTime: FC<CalTimeProps> = (props) => {
  const mode = useContext(ModeContext)
  const dt = new Date(props.day)
  const time = props.time.slice(0, -1)
  dt.setHours(Number(time.split(":")[0]))
  dt.setMinutes(Number(time.split(":")[1]))
  const dt_ISO = dt.toISOString()
  //受付時間外
  const h = dt.getHours()
  const day = dt.getDay()
  if( day === 0 || (day===6 && ( h<11 || 15<=h ))){
    return <div className={ `${styles.cal_time} ${styles.cal_outside_hours}` }></div>
  }
  if(mode == 0){ // FP が予約確認と登録
    return <CalTimeFpReception dt_ISO={dt_ISO} />
  }else if(mode == 1){// User 予約可能日時を確認
    return <CalTimeUserReception dt_ISO={dt_ISO}/>
  }else if (mode == 2){// User 予約完了した一覧を確認
    return <CalTimeUserReservation dt_ISO={dt_ISO}/>
  }
  return <></>
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
    <div className="w-100 m-0">
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