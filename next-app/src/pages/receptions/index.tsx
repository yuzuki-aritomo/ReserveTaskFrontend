import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import WeekCalendar from 'src/components/calendar_week/WeekCalendar'
import { ReceptionData } from 'Models/ReceptionModel'
import { GetReceptionsApi } from 'Api/Receptions/GetReceptionsApi'
import { GetReceptionsApiResData } from "Api/Receptions/Models/GetReceptionsModel"

const ReceptionsPage: NextPage = () => {
  const [reception, setReception] = useState<ReceptionData[]>([])
  useEffect(() => {
    const fetchReceptionsData = async () =>{
      const getReceptionsApiResData: GetReceptionsApiResData = await GetReceptionsApi()
      const formatToISO = (d: string) => new Date(d).toISOString()
      if(getReceptionsApiResData.res?.reception_dates){
        for(let i=0; i<getReceptionsApiResData.res.reception_dates.length;i++){
          getReceptionsApiResData.res.reception_dates[i].start = formatToISO(getReceptionsApiResData.res.reception_dates[i].start)
          getReceptionsApiResData.res.reception_dates[i].end = formatToISO(getReceptionsApiResData.res.reception_dates[i].end)
        }
        setReception(getReceptionsApiResData.res?.reception_dates)
      }
    }
    fetchReceptionsData()
  }, [])

  return(
    <div>
      <WeekCalendar receptions={ reception } />
    </div>
  )
}

export default ReceptionsPage