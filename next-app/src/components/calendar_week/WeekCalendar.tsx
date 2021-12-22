import { FC, useState, useContext, Dispatch, SetStateAction} from 'react'
import styles from "styles/calWeek.module.css"
import { ReceptionData } from 'src/components/models/ReceptionModel'
import { Button, Card } from "react-bootstrap"
import { 
  WeekCalendarProvider, 
  EditFlagContext, 
  setEditFlagContext, 
  setPostReceptionsContext,
  DetailReceptionsContext,
  ModeContext,
} from 'src/components/calendar_week/WeekCalendarProvider'
import { CalWeek } from 'src/components/calendar_week/WeekCalendarChidlren'

//カレンダー本体
type WeekCalendarProps = {
  receptions: ReceptionData[],
  mode: number
}
const WeekCalendar: FC<WeekCalendarProps> = ({receptions, mode}) => {
  //今日を含む直近の一週間の日付をweekDaysに保存
  const today = new Date()
  let weekDays: string[] = Array(7)
  let dt = new Date(today.getFullYear(), today.getMonth())
  dt.setDate(today.getDate() - today.getDay()-1);
  for(let i=0; i<7;i++){
    dt.setDate(dt.getDate() + 1);
    weekDays[i] = dt.toISOString();
  }
  //日付初期化
  const [week, setWeek] = useState<string[]>(weekDays)

return(
    <div>
      <WeekCalendarProvider receptions={ receptions } mode={ mode } >
        <div className={ styles.hole_cal }>
          <div className={styles.cal}>
            <CalWeekTop week={ week } setWeek={ setWeek } />
            <CalWeek weekDays={ week } />
            {mode==0&& //FPの時のみ
              <CalWeekBottom />
            }
          </div>
          <div className={ styles.detail }>
            <CalDetailTop />
            <CalDetail />
          </div>
        </div>
      </WeekCalendarProvider>
    </div>
  )
}
export default WeekCalendar

const CalDetailTop: FC = () => {
  return(
    <div className="d-flex justify-content-center mt-4" >
      <p className={styles.week_calendar_title}> Receptions Detail </p>
    </div>
  )
}

// Calendar詳細 右上に表示される
const CalDetail: FC = () => {
  const receptions = useContext(DetailReceptionsContext)
  const mode = useContext(ModeContext)
  const formatDate = (start: string, end: string) => {
    const startDate = new Date(start)
    const endDate = new Date(end)
    const dt = startDate.getMonth() + "/"+ endDate.getDate()
    const startTime = startDate.getHours()+":"+startDate.getMinutes().toString().padStart(2, '0')
    const endTime = endDate.getHours()+":"+endDate.getMinutes().toString().padStart(2, '0')
    const res = dt + "  " + startTime + "~" + endTime
    
  return res
  }
  const deleteReception = () => {
    //delete Reception api
  }
  const cancelReception = () => {
    //cancel Reception api
  }
  const reserveReception = () => {
    // reserve Reception api
  }
  
return(
    <div className="mt-4 d-flex justify-content-center">
      {receptions && //receptions情報がある時のみ
        receptions.map((reception, index) =>
          <Card className="w-75" key={index}>
            <Card.Header as="h5">予約情報詳細</Card.Header>
            <Card.Body>
              <Card.Title>{ formatDate(reception.start, reception.end) }</Card.Title>
                {reception.reserved && //予約完了している場合
                  <>
                    <Card.Text>User: {reception.user_name } </Card.Text>
                    <Button variant="outline-danger" onClick={ cancelReception } >予約キャンセル</Button>
                  </>
                }
                { !reception.reserved && mode===0 && //予約受付中
                  <>
                    <Card.Text> 予約受付中 </Card.Text>
                    <Button variant="outline-danger" onClick={ deleteReception }>予約受付削除</Button>
                  </>
                }
                { !reception.reserved && mode===1 && //予約受付中
                  <>
                    <Card.Text> 予約受付中 </Card.Text>
                    <Button variant="outline-success" onClick={ reserveReception }>予約する</Button>
                  </>
                }
            </Card.Body>
          </Card>
        )
      }
    </div>
  )
}

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
    let Week: string[] = Array(7)
    for(let i=0; i<7;i++){
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
  const setPostReceptions = useContext(setPostReceptionsContext)
  const toEditMode = () => setEditFlag(true)
  const cancelEditMode = () => {
    setEditFlag(false)
    setPostReceptions([])
  }
  const RegisterReceptions = () =>{
    //post receptions
  }

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