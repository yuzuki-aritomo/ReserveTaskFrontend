import { FC, FormEvent, useContext } from 'react'
import { SignOutApi } from 'src/api/auth/SignOutApi'
import { Row, Col, Card, Form, Button } from "react-bootstrap"
import { setUserContext } from 'src/providers/UserProvider'

export const SignOut: FC = ()=> {
  const setUser = useContext(setUserContext)
  const SignOutSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try{
      setUser(null)
      await SignOutApi()
    }catch(e){
      console.error(e)
    }
  }

  return(
    <Row className="justify-content-md-center mt-4">
        <Col md={8}>
          <Card>
            <Card.Header>Sign Out</Card.Header>
            <Card.Body>
              <Form onSubmit={SignOutSubmit}>
                <Button className="mt-2" variant="primary" type="submit">
                  Sign Out
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
  )
}