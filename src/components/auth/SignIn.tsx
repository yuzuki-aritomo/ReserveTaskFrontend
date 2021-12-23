import { FC, ChangeEvent, useState } from "react"
import { SignInApi, SignInReqData, SignInResData } from 'src/api/auth/SignInApi'
import { useRouter } from 'next/router'
import { Row, Col, Card, Form, Button, FloatingLabel } from "react-bootstrap"

type SignInProps = {
  toPath?: string;
}

const SignIn: FC<SignInProps> = ({ toPath }) => {
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
      const path = toPath ?? "/"
      router.push(path)
      console.log("Success SignInApi:",signInResData)
    }catch(e){
      //error情報を表示
      console.error(e)
    }
  }
  
  return (
    <Row className="justify-content-md-center mt-4">
      <Col md={8}>
        <Card>
          <Card.Header>Sign In</Card.Header>
          <Card.Body>
            <Form onSubmit={SignInSubmit}>
              <FloatingLabel controlId="email" label="Email address" className="mb-3">
                <Form.Control required type="email" placeholder="Email@example.com" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
              </FloatingLabel>
              <FloatingLabel controlId="password" label="Password" className="mb-3">
                <Form.Control required type="password" placeholder="Password" value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
              </FloatingLabel>
              <Button className="mt-2" variant="primary" type="submit">
                Sign In
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default SignIn