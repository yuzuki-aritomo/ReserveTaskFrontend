import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Top Page</h1>
      <Link href="/sign_up">Sign Up</Link>
    </div>
  )
}

export default Home
