import type { NextPage } from 'next'
import Link from 'next/link'
import { SignUpApi, SignUpReqData, SignUpResData } from 'Api/Auth/SignUpApi'
import { useRouter } from 'next/router'
import { Row, Col, Card, Form, Button, FloatingLabel } from "react-bootstrap"

const SignUpPage: NextPage = () => {
  const router = useRouter()

  const SignUpSubmit = async (event: any) => {
    event.preventDefault();
    const { name, email, password, role } = event.target.elements;
    const ReqData: SignUpReqData = {
      name: name.value,
      email: email.value,
      password: password.value,
      role: role.value,
    }
    try{
      const signUpResData: SignUpResData  = await SignUpApi(ReqData)
      //User情報を保存して/homeにリダイレクト
      //router.push('/home')
      console.log("SignUpApi",signUpResData)
    }catch(e){
      console.error(e)
    }
  }

  return(
    <div>
      <Link href="/">Top</Link>
      <h1>sign up</h1>
      <Row className="justify-content-md-center mt-4">
        <Col md={8}>
          <Card>
            <Card.Header>Sign up</Card.Header>
            <Card.Body>
              <Form onSubmit={SignUpSubmit}>
                <FloatingLabel controlId="name" label="User Name" className="mb-3">
                  <Form.Control required type="text" placeholder="text"/>
                </FloatingLabel>
                <FloatingLabel controlId="email" label="Email address" className="mb-3">
                  <Form.Control required type="email" placeholder="Email@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="password" label="Password" className="mb-3">
                  <Form.Control required type="password" placeholder="Password" />
                </FloatingLabel>
                <Form.Group controlId="role">
                  <Form.Label>User Type</Form.Label>
                  <Form.Check
                    required
                    type="radio"
                    label="User"
                    name="role"
                    value="1"
                    id="1"
                  />
                  <Form.Check
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
    </div>
  )
}

export default SignUpPage