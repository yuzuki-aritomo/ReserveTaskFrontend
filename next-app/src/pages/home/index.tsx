import type { NextPage } from 'next'
import Link from 'next/link'
import { SignOutApi } from 'Api/Auth/SignOutApi'
import { Row, Col, Card, Form, Button } from "react-bootstrap"

const HomePage: NextPage = () => {

  const SignOutSubmit = async (event: any) => {
    event.preventDefault();
    try{
      await SignOutApi()
    }catch(e){
      console.error(e)
    }
  }
  return(
    <div>
      <Link href="/">Top</Link>
      <h1>sign out</h1>
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
    </div>
  )
}

export default HomePage