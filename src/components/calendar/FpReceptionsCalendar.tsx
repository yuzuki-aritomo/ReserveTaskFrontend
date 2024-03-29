import { FC, useEffect, useState } from 'react'
import WeekCalendar from 'src/components/calendar_week/WeekCalendar'
import { ScheduleData } from 'src/components/calendar_week/WeekCalendarProvider'
import { GetReceptionsApi, GetReceptionsResData, GetReceptionsReqData } from 'src/api/receptions/GetReceptionsApi'

const FpReceptionsCalendar:FC = () => {
  const [schedules, setSchedules] = useState<ScheduleData[]>([])
  useEffect(() => {
    const fetchReceptionsData = async () =>{
      const formatToISO = (d: string) => new Date(d).toISOString()
      try{
        const getReceptionsReqData: GetReceptionsReqData = {
          start: undefined,
          end: undefined,
        }
        const getReceptionsResData: GetReceptionsResData = await GetReceptionsApi(getReceptionsReqData)
        const fetch_data = getReceptionsResData.reception_dates
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
      }catch(e){
        console.log(e)
      }
    }
    fetchReceptionsData()
  }, [])
  
  return(
    <div>
      <WeekCalendar schedules={ schedules } mode={ 0 }  />
    </div>
  )
}

export default FpReceptionsCalendar