import type { NextPage } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import { SignupReqData } from 'Api/Auth/Models/AuthApiModel'
import { SignUpApi } from 'Api/Auth/AuthApi'
import { useRouter } from 'next/router'

const SignupPage: NextPage = () => {
  const router = useRouter()

  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Name, setName] = useState('')

  const SignUp = async () => {
    const ReqData: SignupReqData = {
      email: Email,
      password: Password,
      name: Name,
      role: 1
    }
    const SignupResponse = await SignUpApi(ReqData)
    console.log(SignupResponse)
    if(SignupResponse.status == "success"){
      //User情報を保存する
      //router.push('/home')
    }else{
      //error情報を表示
      console.log(SignupResponse.errors.full_messages)
    }
  }

  return(
    <div>
      <Link href="/">Top</Link>
      <h1>sign up</h1>
      <div className="form">
        <input
          type="email"
          name="email"
          onChange={e => setEmail(e.target.value)}
          value={ Email }
        />
        <input
          type="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
          value={ Password }
        />
        <input
          type="text"
          name="name"
          onChange={e => setName(e.target.value)}
          value={ Name }
        />
        <button onClick={SignUp}>Sign up</button>
      </div>
    </div>
  )
}

export default SignupPage