import { FC, useContext } from 'react'
import styles from "styles/calWeek.module.css"
import { ReceptionData } from 'Models/ReceptionModel'
import { 
  ReceptionContext, EditFlagContext, PostReceptionsContext, setPostReceptionsContext, setDetailReceptionContext
} from 'src/components/calendar_week/WeekCalendarProvider'

type CalTimeProps = {
  dt_ISO: string
}
// FP が予約確認と登録
export const CalTimeFpReception: FC<CalTimeProps> = ( props ) => {
  const setDetailReception = useContext (setDetailReceptionContext)
  const receptions = useContext(ReceptionContext)
  const reception = receptions.find(r => r.start===props.dt_ISO)
  const EditFlag = useContext(EditFlagContext)
  if(EditFlag){
    return <EditCalTime reception={ reception } dt={props.dt_ISO} />
  }else if (!reception){
    return(
      <div className={ styles.cal_time }>
      </div>
    )
  }else if (reception.reserved){
    return(
      <div className={ styles.cal_time } onClick={ ()=> setDetailReception(reception) }>
        予約完了
      </div>
    )
  }else{
    return(
      <div className={ styles.cal_time } onClick={ ()=> setDetailReception(reception) }>
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

// User 予約可能日時を確認
export const CalTimeUserReception: FC<CalTimeProps> = ( props ) => {
  const setDetailReception = useContext (setDetailReceptionContext)
  const receptions = useContext(ReceptionContext)
  const reception = receptions.find(r => r.start===props.dt_ISO)
  if (!reception){
    return(
      <div className={ styles.cal_time }>
      </div>
    )
  }else if (reception.reserved){
    return(
      <div className={ styles.cal_time } onClick={ ()=> setDetailReception(reception) }>
        予約完了
      </div>
    )
  }else{
    return(
      <div className={ styles.cal_time } onClick={ ()=> setDetailReception(reception) }>
        予約受付中
      </div>
    )
  }
}

// User 予約完了した一覧を確認
export const CalTimeUserReservation: FC<CalTimeProps> = ( props ) => {
  const setDetailReception = useContext (setDetailReceptionContext)
  const receptions = useContext(ReceptionContext)
  const reception = receptions.find(r => r.start===props.dt_ISO)
  if (!reception){
    return(
      <div className={ styles.cal_time }>
      </div>
    )
  }else if (reception.reserved){
    return(
      <div className={ styles.cal_time } onClick={ ()=> setDetailReception(reception) }>
        予約完了
      </div>
    )
  }else{
    return(
      <div className={ styles.cal_time } onClick={ ()=> setDetailReception(reception) }>
        予約受付中
      </div>
    )
  }
}