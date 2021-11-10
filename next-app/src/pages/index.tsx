import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/sign_up">Sign Up</Link>
      <h1>Top Page</h1>
    </div>
  )
}

export default Home
