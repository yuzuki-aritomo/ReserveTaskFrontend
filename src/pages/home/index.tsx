import type { NextPage } from 'next'
import Link from 'next/link'
import { SignOut } from 'src/components/auth/SignOut'

const HomePage: NextPage = () => {

  return(
    <div>
      <Link href="/">Top</Link>
      <h1>sign out</h1>
      <SignOut />
    </div>
  )
}

export default HomePage