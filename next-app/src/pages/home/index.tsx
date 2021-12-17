import type { NextPage } from 'next'
import Link from 'next/link'
import { SignOut } from 'src/components/auth/SignOut'

const HomePage: NextPage = () => {

  return(
    <div>
      <SignOut />
    </div>
  )
}

export default HomePage