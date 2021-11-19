import type { NextPage } from 'next'
import Link from 'next/link'
import { SignInReqData, SignInApiResData } from 'Api/Auth/Models/SignInApiModel'
import { SignInApi } from 'Api/Auth/SignInApi'
import { useRouter } from 'next/router'
import { Row, Col, Card, Form, Button, FloatingLabel } from "react-bootstrap"

const SignInPage: NextPage = () => {
  const router = useRouter()

  const SignInSubmit = async (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const signInReqData: SignInReqData = {
      email: email.value,
      password: password.value,
    }
    const signInApiResData: SignInApiResData  = await SignInApi(signInReqData)
    if(signInApiResData.ok){
      //User情報を保存して/homeにリダイレクト
      //router.push('/home')
      console.log("Success SignInApi:",signInApiResData)
    }else{
      //error情報を表示
      console.log("SignInError:", signInApiResData.errorText)
    }
  }
  const testSubmit = async (event: any) => {
    event.preventDefault();
    const res: Response = await fetch('http://localhost:3001/receptions', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cache': 'no-cache',
        'uid': localStorage.getItem("uid") ?? "",
        'access-token': localStorage.getItem("access-token") ?? "",
        'client': localStorage.getItem("client") ?? "",
      },
      body: JSON.stringify({
        "register_date": [
          "2021-10-16T17:00:00+09:00"
        ]
      })
    })
    console.log(res)
    console.log(res.json())
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
                  <Form.Control required type="email" placeholder="Email@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="password" label="Password" className="mb-3">
                  <Form.Control required type="password" placeholder="Password" />
                </FloatingLabel>
                <Button className="mt-2" variant="primary" type="submit">
                  Sign In
                </Button>
              </Form>
            </Card.Body>
          </Card>
          {/* ------------ */}
          <Form onSubmit={testSubmit}>
            <Button className="mt-2" variant="primary" type="submit">
              test
            </Button>
          </Form>
          {/* ------------ */}
        </Col>
      </Row>
      
    </div>
  )
}

export default SignInPage