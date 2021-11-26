import { FC, useState} from 'react'
import { Row, Col } from "react-bootstrap"
import styles from "styles/calWeek.module.css"

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

  const reservation_dates = new Date("2021-11-25T13:00:00+09:00").toISOString()
  const reception_dates = new Date("2021-11-24T13:00:00+09:00").toISOString()
  
  if( dt_ISOS === reservation_dates ){
    return(
      <div className={ styles.cal_time }>
        予約されています
      </div>
    )
  }
  if( dt_ISOS === reception_dates ){
    return(
      <div className={ styles.cal_time }>
        予約受付
      </div>
    )
  }
  return(
    <div className={ styles.cal_time }>
      
    </div>
  )
}

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
  const ymd = props.day.split('T')[0].split('-')
  const format_day: string = ymd[1]+"/"+ymd[2]
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

type CalWeekProps = {
  weekDays: string[],
}
const CalWeek: FC<CalWeekProps> = (props) => {
  return(
    <div>
      <h1>test</h1>
      <div className={styles.cal}>
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
    </div>
  )
}

const Cal: FC = () => {
  //今日を含む直近の一週間の日付をweekDaysに保存
  const today = new Date()
  var weekDays: string[] = Array(7)
  var dt = new Date(today.getFullYear(), today.getMonth())
  for(var i=0; i<7;i++){
    dt.setDate(today.getDate() + (i - today.getDay()));
    weekDays[i] = dt.toISOString();
  }
  return(
    <CalWeek weekDays={ weekDays } />
  )
}


export default Cal