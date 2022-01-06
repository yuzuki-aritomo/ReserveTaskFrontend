import type { NextPage } from 'next'
import { useContext } from 'react'
import FpReceptionsCalendar from 'src/components/calendar/FpReceptionsCalendar'
import CustomerReceptionsCalendar from 'src/components/calendar/CustomerReceptionsCalendar'
import { UserContext } from 'src/provider/UserProvider'

const ReceptionsPage: NextPage = () => {
  const user = useContext(UserContext)
  if (user?.role == 'customer'){
    return(
      <CustomerReceptionsCalendar />
    )
  }else{
    return(
      <FpReceptionsCalendar />
    )
  }
}

export default ReceptionsPage