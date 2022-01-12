import { FC, useContext } from 'react'
import styles from "styles/calWeek.module.css"
import { 
  ScheduleContext, EditFlagContext, PostReceptionsContext, setPostReceptionsContext, setDetailSchedulesContext, ScheduleData
} from 'src/components/calendar_week/WeekCalendarProvider'

type CalTimeProps = {
  dt_ISO: string
}
// FP が予約確認と登録
export const CalTimeFpReception: FC<CalTimeProps> = ( { dt_ISO } ) => {
  const setDetailSchedules = useContext (setDetailSchedulesContext)
  const schedules = useContext(ScheduleContext)
  const schedule = schedules.filter(r => r.start===dt_ISO)
  const EditFlag = useContext(EditFlagContext)
  if(EditFlag){
    if(schedule.length === 0 ){
      return <EditCalTime schedule={ undefined } dt={dt_ISO} />
    }
    
  return <EditCalTime schedule={ schedule[0] } dt={dt_ISO} />
  }
  if (schedule.length === 0){
    return(
      <div className={ styles.cal_time }>
      </div>
    )
  }else if (schedule[0].reserved){
    return(
      <div className={ styles.cal_time_reserved } onClick={ ()=> setDetailSchedules(schedule)  }></div>
    )
  }else{
    return(
      <div className={ styles.cal_time_reception } onClick={ ()=> setDetailSchedules(schedule) }></div>
    )
  }
}
//受付時間編集中
type EditCalTime = {
  schedule: ScheduleData | undefined;
  dt: string;
}
const EditCalTime: FC<EditCalTime> = ( {schedule, dt} ) =>{
  const postReceptions = useContext(PostReceptionsContext)
  const setPostReceptions = useContext(setPostReceptionsContext)
  const handlePostReceptions = () => {
    if( postReceptions.includes(dt) ){
      const newPostReceptions = postReceptions.filter(r => r!==dt)
      setPostReceptions(newPostReceptions)
    }else{
      setPostReceptions([ ...postReceptions, dt ])
    }
  }
  if (!schedule){
    return(
      <div className={ styles.cal_time } onClick={ handlePostReceptions }>
        {postReceptions.includes(dt) &&
          '○'
        }
      </div>
    )
  }else if (schedule.reserved){
    return(
      <div className={ styles.cal_time_reserved }></div>
    )
  }else{
    return(
      <div className={ styles.cal_time_reception }></div>
    )
  }
}

// Customer 予約可能日時を確認
export const CalTimeUserReception: FC<CalTimeProps> = ( {dt_ISO} ) => {
  const setDetailSchedules = useContext (setDetailSchedulesContext)
  const schedules = useContext(ScheduleContext)
  const schedule = schedules.filter(r => r.start===dt_ISO && !r.reserved)
  const reservedSchedule = schedules.filter(r => r.start===dt_ISO && r.reserved)
  if (reservedSchedule.length>0){
    return(
      <div className={ styles.cal_time_reserved } onClick={ ()=> setDetailSchedules(reservedSchedule) }></div>
    )
  }
  if (schedule.length===0){
    return(
      <div className={ styles.cal_time }>
      </div>
    )
  }else{
    return(
      <div className={ styles.cal_time_reception } onClick={ ()=> setDetailSchedules(schedule) }>
        { schedule.length }件
      </div>
    )
  }
}

// Customer 予約完了した一覧を確認
export const CalTimeUserReservation: FC<CalTimeProps> = ( {dt_ISO} ) => {
  const setDetailSchedules = useContext(setDetailSchedulesContext)
  const schedules = useContext(ScheduleContext)
  const schedule = schedules.filter(r => r.start===dt_ISO)
  if (schedule.length===0){
    return(
      <div className={ styles.cal_time }></div>
    )
  }else{
    return(
      <div className={ styles.cal_time_reserved } onClick={ ()=> setDetailSchedules(schedule) }></div>
    )
  }
}