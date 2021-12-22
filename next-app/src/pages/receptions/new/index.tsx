import type { NextPage } from 'next'
import Link from 'next/link'
import { PostReceptionsReqData, PostReceptionsApiResData } from 'Api/Receptions/Models/PostReceptionsModel'
import { PostReceptionsApi } from 'Api/Receptions/PostReceptionsApi'
import { Row, Col, Card, Form, Button, FloatingLabel } from "react-bootstrap"

const ReceptionsPage: NextPage = () => {

  const PostReceptionsSubmit = async (event: any) => {
    event.preventDefault();
    const { register_date_text } = event.target.elements;
    const register_dates: string[] = register_date_text.value.split(",");
    const postReceptionsReqData: PostReceptionsReqData = {
      register_date: register_dates
    }
    const postReceptionsApiResData: PostReceptionsApiResData  = await PostReceptionsApi(postReceptionsReqData)
    if(postReceptionsApiResData.ok){
      console.log("Success SignInApi:",postReceptionsApiResData)
    }else{
      //error情報を表示
      console.log("SignInError:", postReceptionsApiResData.errorText)
    }
  }
  
return(
    <div>
      <Link href="/">Top</Link>
      <h1>Receptions</h1>
      <Row className="justify-content-md-center mt-4">
        <Col md={8}>
          <Card>
            <Card.Header>登録日時を , 区切りで入力</Card.Header>
            <Card.Body>
              <Form onSubmit={PostReceptionsSubmit}>
                <FloatingLabel controlId="register_date_text" label="register dates" className="mb-3">
                  <Form.Control required type="text" placeholder="register dates" />
                </FloatingLabel>
                <Button className="mt-2" variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ReceptionsPage