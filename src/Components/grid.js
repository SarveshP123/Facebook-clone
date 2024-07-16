import { Button, Row, Col, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Grid() {
  return (
    <>
      <Row>
        <Col md={2} ></Col>
        <Col className="c1">
          <p  md={4} className="a1">facebook</p>
          <p className="a2">
            Facebook helps you connect and share with the people in your life.
          </p>
        </Col>
        <Col   md={4} >
          <Card className="box">
            <Card.Body>
              <Form.Control className="phone" size="lg" type="text" placeholder="Phone Number or Email" />
              <Form.Control className="pass" size="lg" type="text" placeholder="Password" />

              <div className="d-grid gap-2">
                <Button className="in" variant="primary" size="lg">
                  Log in
                </Button>
              </div>

             <div className="text-center"><a  href="" className="fogt">Forgotten password?</a></div> 

             <hr/>

             <div className="acc"> <Button variant="success" style={{backgroundColor:"#36A420"}} >Create new account</Button></div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
      <p md={4} className="page"><span className="page1">Create a Page</span>  for a celebrity, brand or business.</p>
    </>
  );
}

export default Grid;
