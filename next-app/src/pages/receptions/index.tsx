import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import WeekCalendar from 'src/components/calendar_week/WeekCalendar'
import { ReceptionData } from 'src/components/models/ReceptionModel'

const ReceptionsPage: NextPage = () => {
  
  const [reception, setReception] = useState<ReceptionData[]>([])
  useEffect(() => {
    const fetchReceptionsData = async () =>{
      const formatToISO = (d: string) => new Date(d).toISOString()
      // dummy data
      const fetch_data = [
        {reception_id: 1, user_name: 'user_1', start: '2021-12-31T03:00:00.000Z', end: '2021-12-31T03:30:00.000Z', reserved: true},
        {reception_id: 3, user_name: 'user_2', start: '2021-12-31T04:00:00.000Z', end: '2021-12-31T04:30:00.000Z', reserved: true},
        {reception_id: 6, user_name: '', start: '2021-12-29T03:30:00.000Z', end: '2021-12-29T04:00:00.000Z', reserved: false},
        {reception_id: 8, user_name: '', start: '2021-12-29T04:30:00.000Z', end: '2021-12-29T05:00:00.000Z', reserved: false}
      ]
      for(let i=0; i<fetch_data.length;i++){
        fetch_data[i].start = formatToISO(fetch_data[i].start)
        fetch_data[i].end = formatToISO(fetch_data[i].end)
      }
      setReception(fetch_data)
    }
    fetchReceptionsData()
  }, [])

  return(
    <div>
      <WeekCalendar receptions={ reception } mode={ 0 }  />
    </div>
  )
}

export default ReceptionsPage