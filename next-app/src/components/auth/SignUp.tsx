import { FC, useState } from "react"
import { SignUpApi, SignUpReqData, SignUpResData } from 'Api/Auth/SignUpApi'
import { Row, Col, Card, Form, Button, FloatingLabel } from "react-bootstrap"
import { useRouter } from 'next/router'

type SignUpProps = {
  toPath?: string;
}

const SignUp: FC<SignUpProps> = (props) => {
  const router = useRouter()
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [role, setRole] = useState<number>(-1)

  const SignUpSubmit = async (event: any) => {
    event.preventDefault();
    const ReqData: SignUpReqData = {
      name: name,
      email: email,
      password: password,
      role: role,
    }
    try{
      const signUpResData: SignUpResData  = await SignUpApi(ReqData)
      //User情報を保存して/homeにリダイレクト
      const path = props.toPath ?? "/"
      router.push(path)
      console.log("SignUpApi",signUpResData)
    }catch(e){
      console.error(e)
    }
  }
  return(
    <Row className="justify-content-md-center mt-4">
        <Col md={8}>
          <Card>
            <Card.Header>Sign up</Card.Header>
            <Card.Body>
              <Form onSubmit={SignUpSubmit}>
                <FloatingLabel controlId="name" label="User Name" className="mb-3">
                  <Form.Control required type="text" placeholder="text" value={name} onChange={(e) => setName(e.target.value)} />
                </FloatingLabel>
                <FloatingLabel controlId="email" label="Email address" className="mb-3">
                  <Form.Control required type="email" placeholder="Email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FloatingLabel>
                <FloatingLabel controlId="password" label="Password" className="mb-3">
                  <Form.Control required type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FloatingLabel>
                <Form.Group controlId="role">
                  <Form.Label>User Type</Form.Label>
                  <Form.Check
                    required
                    onClick={ (e) => setRole(Number(e.currentTarget.value))}
                    type="radio"
                    label="User"
                    name="role"
                    value="1"
                    id="1"
                  />
                  <Form.Check
                    onClick={ (e) => setRole(Number(e.currentTarget.value))}
                    type="radio"
                    label="Financial Planner"
                    name="role"
                    value="2"
                    id="2"
                  />
                </Form.Group>
                <Button className="mt-2" variant="primary" type="submit">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
  )
}


export default SignUp