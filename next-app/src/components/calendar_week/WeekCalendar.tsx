import { FC, useState,　useContext, Dispatch, SetStateAction} from 'react'
import styles from "styles/calWeek.module.css"
import { ReceptionData } from 'Models/ReceptionModel'
import { Button } from "react-bootstrap"
import { WeekCalendarProvider, EditFlagContext, setEditFlagContext } from 'src/components/calendar_week/WeekCalendarProvider'
import { CalWeek } from 'src/components/calendar_week/WeekCalendarChidlren'

//カレンダー本体
type WeekCalendarProps = {
  receptions: ReceptionData[]
}
const WeekCalendar: FC<WeekCalendarProps> = (props) => {
  //今日を含む直近の一週間の日付をweekDaysに保存
  const today = new Date()
  var weekDays: string[] = Array(7)
  var dt = new Date(today.getFullYear(), today.getMonth())
  dt.setDate(today.getDate() - today.getDay()-1);
  for(var i=0; i<7;i++){
    dt.setDate(dt.getDate() + 1);
    weekDays[i] = dt.toISOString();
  }
  //日付初期化
  const [week, setWeek] = useState<string[]>(weekDays)
  return(
    <div>
      <WeekCalendarProvider receptions={ props.receptions } >
        <div className={styles.cal}>
          <CalWeekTop week={ week } setWeek={ setWeek } />
          <CalWeek weekDays={ week } />
          <CalWeekBottom />
        </div>
      </WeekCalendarProvider>
    </div>
  )
}
export default WeekCalendar

//カレンダー上部
type CalWeekTopProps = {
  week: string[],
  setWeek: Dispatch<SetStateAction<string[]>>
}
const CalWeekTop:FC<CalWeekTopProps> = ( props ) => {
  const toNextWeek = () => {
    changeWeek(true)
  }
  const toPrevWeek = () => {
    changeWeek(false)
  }
  const changeWeek = (next_flag : boolean) => {
    const dt = new Date(props.week[0])
    const diffDays = next_flag ? 6 : -8
    dt.setDate(dt.getDate() + diffDays)
    var Week: string[] = Array(7)
    for(var i=0; i<7;i++){
      dt.setDate(dt.getDate()+1)
      Week[i] = dt.toISOString()
    }
    props.setWeek(Week)
  }
  return(
    <div className="d-flex justify-content-between mt-4" >
      <Button variant="outline-primary" onClick={ toPrevWeek } >Previous Week</Button>
      <p className={styles.week_calendar_title}> WEEK CALENDAR </p>
      <Button variant="outline-primary" onClick={ toNextWeek }>Next Week</Button>
    </div>
  )
}

//カレンダー下部
const CalWeekBottom: FC = () => {
  const EditFlag = useContext(EditFlagContext)
  const setEditFlag = useContext(setEditFlagContext)
  const toEditMode = () => setEditFlag(true)
  const cancelEditMode = () => setEditFlag(false)
  const RegisterReceptions = () =>{}
  return(
    <div className="d-flex justify-content-end mt-4">
      { !EditFlag &&
        <Button variant="outline-success" onClick={ toEditMode } >Register Receptions</Button>
      }
      { EditFlag &&
        <>
          <Button variant="outline-warning" className="mr-4" onClick={ cancelEditMode } >Cancel</Button>
          <Button variant="outline-success" onClick={ RegisterReceptions } >Register</Button>
        </>
      }
    </div>
  )
}