import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import WeekCalendar from 'src/components/calendar_week/WeekCalendar'
import { ReceptionData } from 'src/components/models/ReceptionModel'
import { ScheduleData } from 'src/components/calendar_week/WeekCalendarProvider'

const ReceptionsPage: NextPage = () => {
  
  const [schedules, setSchedules] = useState<ScheduleData[]>([])
  useEffect(() => {
    const fetchReceptionsData = async () =>{
      const formatToISO = (d: string) => new Date(d).toISOString()
      // dummy data
      const fetch_data: ReceptionData[]= [
        {reception_id: 1, customer_name: 'user_1', start: '2021-12-31T03:00:00.000Z', end: '2021-12-31T03:30:00.000Z', reserved: true},
        {reception_id: 3, customer_name: 'user_2', start: '2021-12-31T04:00:00.000Z', end: '2021-12-31T04:30:00.000Z', reserved: true},
        {reception_id: 6, customer_name: '', start: '2021-12-29T03:30:00.000Z', end: '2021-12-29T04:00:00.000Z', reserved: false},
        {reception_id: 8, customer_name: '', start: '2021-12-29T04:30:00.000Z', end: '2021-12-29T05:00:00.000Z', reserved: false}
      ]
      const schedule_data: ScheduleData[] = []
      for(let i=0; i<fetch_data.length;i++){
        schedule_data.push({
          id: fetch_data[i].reception_id,
          start: formatToISO(fetch_data[i].start),
          end: formatToISO(fetch_data[i].end),
          reserved: fetch_data[i].reserved,
          name: fetch_data[i].customer_name,
        })
      }
      setSchedules(schedule_data)
    }
    fetchReceptionsData()
  }, [])

  return(
    <div>
      <WeekCalendar schedules={ schedules } mode={ 0 }  />
    </div>
  )
}

export default ReceptionsPage