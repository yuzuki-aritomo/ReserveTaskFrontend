import type { NextPage } from 'next'
import FpReceptionsCalendar from 'src/components/calendar/FpReceptionsCalendar'

const ReceptionsPage: NextPage = () => {
  //user, fpでcalendarの出し分け

  return(
    <FpReceptionsCalendar />
  )
}

export default ReceptionsPage