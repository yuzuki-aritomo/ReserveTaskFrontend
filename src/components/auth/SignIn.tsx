import { FC, ChangeEvent, useState, useContext } from "react"
import { SignInApi, SignInReqData, SignInResData } from 'src/api/auth/SignInApi'
import { useRouter } from 'next/router'
import { Row, Col, Card, Form, Button, FloatingLabel } from "react-bootstrap"
import { setUserContext, UserData } from 'src/providers/UserProvider'
import BackdropModal from "src/components/ui/BackdropModal"

type SignInProps = {
  toPath?: string;
}

const SignIn: FC<SignInProps> = ({ toPath }) => {
  const router = useRouter()
  const setUser = useContext(setUserContext)
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [show, setShow] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState('')

  const SignInSubmit = async (event: any) => {
    event.preventDefault();
    const signInReqData: SignInReqData = {
      email: email,
      password: password,
    }
    try{
      const signInResData: SignInResData  = await SignInApi(signInReqData)
      const userDate: UserData = {
        role: signInResData.data.role.toString(),
        name: signInResData.data.name,
        email: signInResData.data.email
      }
      setUser(userDate)
      const path = toPath ?? "/"
      router.push(path)
      console.log("Success SignInApi:",signInResData)
    }catch(e){
      setShow(true)
      if( e instanceof Error){
        setModalContent(e.message)
      }
      console.error(e)
    }
  }

  const ModalClose = () => {
    setShow(false)
  }
  
  return (
    <div>
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
      <BackdropModal 
        handleClose={ ModalClose }
        show={show}
        content={modalContent }
      />
    </div>
  )
}

export default SignIn