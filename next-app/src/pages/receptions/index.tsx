import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import WeekCalendar from 'src/components/calendar_week/WeekCalendar/WeekCalendar'
import { ReceptionData } from 'Models/ReceptionModel'
import { GetReceptionsApi } from 'Api/Receptions/GetReceptionsApi'
import { GetReceptionsApiResData } from "Api/Receptions/Models/GetReceptionsModel"

const ReceptionsPage: NextPage = () => {
  const [reception, setReception] = useState<ReceptionData[]>([])
  useEffect(() => {
    const fetchReceptionsData = async () =>{
      const getReceptionsApiResData: GetReceptionsApiResData = await GetReceptionsApi()
      const formatToISO = (d: string) => new Date(d).toISOString()
      if(getReceptionsApiResData.res?.data){
        for(let i=0; i<getReceptionsApiResData.res.data.length;i++){
          getReceptionsApiResData.res.data[i].start = formatToISO(getReceptionsApiResData.res.data[i].start)
          getReceptionsApiResData.res.data[i].end = formatToISO(getReceptionsApiResData.res.data[i].end)
        }
        setReception(getReceptionsApiResData.res?.data)
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