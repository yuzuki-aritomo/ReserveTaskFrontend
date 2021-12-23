import { FC, useContext } from 'react'
import styles from "styles/calWeek.module.css"
import { ReceptionData } from 'src/components/models/ReceptionModel'
import { 
  ReceptionContext, EditFlagContext, PostReceptionsContext, setPostReceptionsContext, setDetailReceptionsContext
} from 'src/components/calendar_week/WeekCalendarProvider'

type CalTimeProps = {
  dt_ISO: string
}
// FP が予約確認と登録
export const CalTimeFpReception: FC<CalTimeProps> = ( { dt_ISO } ) => {
  const setDetailReceptions = useContext (setDetailReceptionsContext)
  const receptions = useContext(ReceptionContext)
  const reception = receptions.filter(r => r.start===dt_ISO)
  const EditFlag = useContext(EditFlagContext)
  if(EditFlag){
    if(reception.length === 0 ){
      return <EditCalTime reception={ undefined } dt={dt_ISO} />
    }
    
  return <EditCalTime reception={ reception[0] } dt={dt_ISO} />
  }
  if (reception.length === 0){
    return(
      <div className={ styles.cal_time }>
      </div>
    )
  }else if (reception[0].reserved){
    return(
      <div className={ styles.cal_time } onClick={ ()=> setDetailReceptions(reception)  }>
        予約完了
      </div>
    )
  }else{
    return(
      <div className={ styles.cal_time } onClick={ ()=> setDetailReceptions(reception) }>
        予約受付中
      </div>
    )
  }
}
//受付時間編集中
type EditCalTime = {
  reception:  ReceptionData | undefined;
  dt: string;
}
const EditCalTime: FC<EditCalTime> = ( {reception, dt} ) =>{
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
  if (!reception){
    return(
      <div className={ styles.cal_time } onClick={ handlePostReceptions }>
        {postReceptions.includes(dt) &&
          '○'
        }
      </div>
    )
  }else if (reception.reserved){
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

// Customer 予約可能日時を確認
export const CalTimeUserReception: FC<CalTimeProps> = ( {dt_ISO} ) => {
  const setDetailReceptions = useContext (setDetailReceptionsContext)
  const receptions = useContext(ReceptionContext)
  const reception = receptions.filter(r => r.start===dt_ISO && !r.reserved)
  if (reception.length===0){
    return(
      <div className={ styles.cal_time }>
      </div>
    )
  }else{
    return(
      <div className={ styles.cal_time } onClick={ ()=> setDetailReceptions(reception) }>
        予約空き{ reception.length }件
      </div>
    )
  }
}

// Customer 予約完了した一覧を確認
export const CalTimeUserReservation: FC<CalTimeProps> = ( {dt_ISO} ) => {
  const setDetailReceptions = useContext(setDetailReceptionsContext)
  const receptions = useContext(ReceptionContext)
  const reception = receptions.filter(r => r.start===dt_ISO)
  if (reception.length===0){
    return(
      <div className={ styles.cal_time }>
      </div>
    )
  }else{
    return(
      <div className={ styles.cal_time } onClick={ ()=> setDetailReceptions(reception) }>
        予約完了
      </div>
    )
  }
}