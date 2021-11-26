import type { NextPage } from 'next'
import WeekCalendar from 'src/components/calendar_week/WeekCalendar'
import { ReceptionData } from 'Models/ReceptionModel'

export const getServerSideProps = async() =>{
  //APIの呼び出し
  const reception: ReceptionData = {
    id: 1,
    start: new Date("2021-11-25T13:00:00+09:00").toISOString(),
    user_name: "test",
    reserved: false
  }
  const receptions: ReceptionData[] = [reception]
  return { props: { receptions } }
}

type ReceptionsPageProps = {
  receptions: ReceptionData[]
}
const ReceptionsPage: NextPage<ReceptionsPageProps> = ( props ) => {
  return(
    <div>
      <WeekCalendar receptions={ props.receptions } />
    </div>
  )
}

export default ReceptionsPage