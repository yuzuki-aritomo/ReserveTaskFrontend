import type { NextPage } from 'next'
import Link from 'next/link'
import SignUp from 'src/components/auth/SignUp'

const SignUpPage: NextPage = () => {
  const toPath = "/home"
  return(
    <div>
      <Link href="/">Top</Link>
      <h1>sign up</h1>
      <SignUp toPath={toPath} />
    </div>
  )
}

export default SignUpPage