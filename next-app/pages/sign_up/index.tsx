import type { NextPage } from 'next'
import { useState } from 'react'
import Link from 'next/link'

const SignupPage: NextPage = () => {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Name, setName] = useState('')

  const SignUp = async () => {
    const res = await fetch('http://localhost:3001/auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: Email,
        password: Password,
        name: Name,
        role: 1
      })
    })
    .then(response => response.json())
    .then((data)=>{
      return data
    }).catch((error)=>{
      return error
    })
    console.log(res)
  }

  return(
    <div>
      <h1>sign up</h1>
      <Link href="/">Top</Link>
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