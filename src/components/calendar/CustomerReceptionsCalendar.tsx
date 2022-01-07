import { FC, useEffect, useState } from 'react'
import WeekCalendar from 'src/components/calendar_week/WeekCalendar'
import { ScheduleData } from 'src/components/calendar_week/WeekCalendarProvider'
import { GetReceptionsOpeningsApi, GetReceptionsOpeningsReqData, GetReceptionsOpeningsResData } from 'src/api/receptions/GetReceptionsOpeningsApi'
import { GetReservationsApi, GetReservationsReqData, GetReservationsResData } from 'src/api/reservations/GetReservationsApi'

const CustomerReceptionsCalendar:FC = () => {
  const [schedules, setSchedules] = useState<ScheduleData[]>([])
  useEffect(() => {
    const fetchReceptionsData = async () =>{
      const formatToISO = (d: string) => new Date(d).toISOString()
      try{
        const getReceptionsOpeningsReqData: GetReceptionsOpeningsReqData = {
          start: undefined,
          end: undefined,
        }
        const getReceptionsOpeningsResData: GetReceptionsOpeningsResData = await GetReceptionsOpeningsApi(getReceptionsOpeningsReqData)
        const fetch_openings = getReceptionsOpeningsResData.reception_dates
        const schedule_data: ScheduleData[] = []
        for(let i=0; i<fetch_openings.length;i++){
          schedule_data.push({
            id: fetch_openings[i].reception_id,
            start: formatToISO(fetch_openings[i].start),
            end: formatToISO(fetch_openings[i].end),
            reserved: fetch_openings[i].reserved,
            name: fetch_openings[i].customer_name,
          })
        }
        const getReservationsReqData: GetReservationsReqData = {
          start: undefined,
          end: undefined,
        }
        const getReservationsResData :GetReservationsResData = await GetReservationsApi(getReservationsReqData)
        const fetch_reservations = getReservationsResData.data
        for(let i=0; i<fetch_reservations.length;i++){
          schedule_data.push({
            id: fetch_reservations[i].reservation_id,
            start: formatToISO(fetch_reservations[i].start),
            end: formatToISO(fetch_reservations[i].end),
            reserved: fetch_reservations[i].reserved,
            name: fetch_reservations[i].fp_name,
          })
        }
        setSchedules(schedule_data)
      }catch(e){
        console.log(e)
      }
    }
    fetchReceptionsData()
  }, [])
  
  return(
    <div>
      <WeekCalendar schedules={ schedules } mode={ 1 } />
    </div>
  )
}

export default CustomerReceptionsCalendar