import {FC} from 'react'
import { Row, Col } from "react-bootstrap"
import styles from "styles/calWeek.module.css"

type CalTimeProps = {
  day: string,
  time: string,
}
const CalTime: FC<CalTimeProps> = (props) => {
  return(
    <div className={ styles.cal_time }>
      { props.day }
      { props.time }
    </div>
  )
}

type CalDayProps = {
  titleFlag: boolean,
  day: string,
}
const CalDay: FC<CalDayProps> = ( props ) => {
  const timeline = [
    '10:00~10:30',
    '10:30~11:00',
    '11:00~11:30',
    '11:30~12:00',
  ]
  return(
    <div>
      { props.titleFlag && 
        <div className={ styles.cal_time }></div>
      }
      { !props.titleFlag && 
        <div className={ styles.cal_time }>{ props.day }</div>
      }
      { props.titleFlag && 
        timeline.map((value, index) => <div className={ styles.cal_time } key={index}>{value}</div> )
      }
      { !props.titleFlag && 
        timeline.map((value, index) => 
          <CalTime key={index} day={props.day} time={ value }/> 
        )
      }
    </div>
  )
}

const CalWeek: FC = () => {
  return(
    <div>
      <h1>test</h1>
      <div className={styles.cal}>
        <Row className="justify-content-md-center mt-4">
          <Col md={4} className={ styles.cal_day }>
            <CalDay titleFlag={ true } day='2021-11-13'/>
          </Col>
          <Col md={4} className={ styles.cal_day }>
            <CalDay titleFlag={ false } day='2021-11-13'/>
          </Col>
          <Col md={4} className={ styles.cal_day }>
            <CalDay titleFlag={ false } day='2021-11-13'/>
          </Col>
          <Col md={4} className={ styles.cal_day }>
            <CalDay titleFlag={ false } day='2021-11-13'/>
          </Col>
          <Col md={4} className={ styles.cal_day }>
            <CalDay titleFlag={ false } day='2021-11-13'/>
          </Col>
          <Col md={4} className={ styles.cal_day }>
            <CalDay titleFlag={ false } day='2021-11-13'/>
          </Col>
          <Col md={4} className={ styles.cal_day }>
            <CalDay titleFlag={ false } day='2021-11-13'/>
          </Col>
          <Col md={4} className={ styles.cal_day }>
            <CalDay titleFlag={ false } day='2021-11-13'/>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default CalWeek