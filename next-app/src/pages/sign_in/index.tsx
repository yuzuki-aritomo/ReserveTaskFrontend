import type { NextPage } from 'next'
import Link from 'next/link'
import SignIn from 'src/components/auth/SignIn'

const SignInPage: NextPage = () => {
  const toPath = "/home"
  
  return(
    <div>
      <Link href="/">Top</Link>
      <h1>sign In</h1>
      <SignIn toPath={toPath} />
    </div>
  )
}

export default SignInPage