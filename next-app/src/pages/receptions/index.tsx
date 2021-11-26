import type { NextPage } from 'next'
import { useState, createContext } from 'react'
import WeekCalendar from 'src/components/calendar_week/WeekCalendar'

interface ReceptionData {
  id: number;
  start: string;
  user_name: string;
  reserved: boolean;
}

const ReceptionsPage: NextPage = () => {
  
  const [ receptions, setReceptions] = useState<ReceptionData[]>([])
  const getReceptionData = () => {
    const d: ReceptionData = {
      id: 1,
      start: new Date("2021-11-25T13:00:00+09:00").toISOString(),
      user_name: "test",
      reserved: true
    }
    const l: ReceptionData[] = [d]
    setReceptions(l)
  }
  return(
    <div>
      <h1 onClick={ getReceptionData }>データの取得</h1>
      <WeekCalendar receptions={ receptions } />
    </div>
  )
}

export default ReceptionsPage