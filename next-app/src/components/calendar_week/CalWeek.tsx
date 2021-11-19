import {FC} from 'react'
import { Row, Col } from "react-bootstrap"


type CalTimeProps = {
  day: string,
  time: string,
}
const CalTime: FC<CalTimeProps> = (props) => {
  return(
    <div>
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
        timeline.map((value, index) => <p key={index}>{value}</p> )
      }
      { !props.titleFlag && 
        timeline.map((value, index) => 
          <CalTime key={index} day={props.day} time={ value } /> 
        )
      }
    </div>
  )
}

const CalWeek: FC = () => {
  return(
    <div>
      <h1>test</h1>
      <Row className="justify-content-md-center mt-4">
        <Col md={4}>
          <CalDay titleFlag={ true } day='2021-11-13'/>
        </Col>
        <Col md={4}>
          <CalDay titleFlag={ false } day='2021-11-13'/>
        </Col>
        <Col md={4}>
          <CalDay titleFlag={ false } day='2021-11-13'/>
        </Col>
      </Row>
    </div>
  )
}

export default CalWeek