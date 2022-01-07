import { FC, useState, MouseEvent, FormEvent, ChangeEvent, useContext } from 'react'
import { SignUpApi, SignUpReqData, SignUpResData } from 'src/api/auth/SignUpApi'
import { Row, Col, Card, Form, Button, FloatingLabel } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { setUserContext, UserData } from 'src/providers/UserProvider'

const SignUp: FC = () => {
  const router = useRouter()
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [role, setRole] = useState<number>(-1)
  const setUser = useContext(setUserContext)
  const SignUpSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const ReqData: SignUpReqData = {
      name: name,
      email: email,
      password: password,
      role: role,
    }
    try {
      const signUpResData: SignUpResData = await SignUpApi(ReqData)
      const userDate: UserData = {
        role: signUpResData.data.role.toString(),
        name: signUpResData.data.name,
        email: signUpResData.data.email
      }
      setUser(userDate)
      router.push('/home')
    } catch (e) {
      console.error(e)
    }
  }
  
return (
    <Row className='justify-content-md-center mt-4'>
      <Col md={8}>
        <Card>
          <Card.Header>Sign up</Card.Header>
          <Card.Body>
            <Form onSubmit={SignUpSubmit}>
              <FloatingLabel controlId='name' label='User Name' className='mb-3'>
                <Form.Control
                  required
                  type='text'
                  placeholder='text'
                  value={name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
              </FloatingLabel>
              <FloatingLabel controlId='email' label='Email address' className='mb-3'>
                <Form.Control
                  required
                  type='email'
                  placeholder='Email@example.com'
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
              </FloatingLabel>
              <FloatingLabel controlId='password' label='Password' className='mb-3'>
                <Form.Control
                  required
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
              </FloatingLabel>
              <Form.Group controlId='role'>
                <Form.Label>User Type</Form.Label>
                <Form.Check
                  required
                  onClick={(e: MouseEvent<HTMLInputElement>) => setRole(Number(e.currentTarget.value))}
                  type='radio'
                  label='User'
                  name='role'
                  value='1'
                  id='1'
                />
                <Form.Check
                  onClick={(e: MouseEvent<HTMLInputElement>) => setRole(Number(e.currentTarget.value))}
                  type='radio'
                  label='Financial Planner'
                  name='role'
                  value='2'
                  id='2'
                />
              </Form.Group>
              <Button className='mt-2' variant='primary' type='submit'>
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
