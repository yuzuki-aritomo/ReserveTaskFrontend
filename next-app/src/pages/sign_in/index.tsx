import type { NextPage } from 'next'
import Link from 'next/link'
import { SignInApi, SignInReqData, SignInResData } from 'Api/Auth/SignInApi'
import { useRouter } from 'next/router'
import { Row, Col, Card, Form, Button, FloatingLabel } from "react-bootstrap"
import { useState } from 'react'

const SignInPage: NextPage = () => {
  const router = useRouter()
  
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const SignInSubmit = async (event: any) => {
    event.preventDefault();
    const signInReqData: SignInReqData = {
      email: email,
      password: password,
    }
    try{
      const signInResData: SignInResData  = await SignInApi(signInReqData)
      //User情報を保存して/homeにリダイレクト
      //router.push('/home')
      console.log("Success SignInApi:",signInResData)
    }catch(e){
      //error情報を表示
      console.error(e)
    }
  }
  return(
    <div>
      <Link href="/">Top</Link>
      <h1>sign In</h1>
      <Row className="justify-content-md-center mt-4">
        <Col md={8}>
          <Card>
            <Card.Header>Sign In</Card.Header>
            <Card.Body>
              <Form onSubmit={SignInSubmit}>
                <FloatingLabel controlId="email" label="Email address" className="mb-3">
                  <Form.Control required type="email" placeholder="Email@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </FloatingLabel>
                <FloatingLabel controlId="password" label="Password" className="mb-3">
                  <Form.Control required type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </FloatingLabel>
                <Button className="mt-2" variant="primary" type="submit">
                  Sign In
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default SignInPage