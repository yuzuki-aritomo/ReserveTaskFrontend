import type { NextPage } from 'next'
import Link from 'next/link'
import SignUp from 'src/components/auth/SignUp'

const SignUpPage: NextPage = () => {
  return (
    <div>
      <Link href='/'>Top</Link>
      <h1>sign up</h1>
      <SignUp />
    </div>
  )
}

export default SignUpPage
