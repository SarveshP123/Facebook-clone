import { Table,Navbar,NavDropdown,Nav,Container,Button,Offcanvas,Accordion,ToggleButton,ToggleButtonGroup,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import bike from '../Images/Gt.jpg';

function Boot(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [value, setValue] = useState([1, 3]);
  const handleChange = (val) => setValue(val);
    return(
        <>

    <Navbar expand="lg" className="a1">
      <Container>
        <Navbar.Brand href="#home">GT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Activity" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Attendence</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Project
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Mobile Number
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar><br/><br/>


    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Muthu</td>
          <td>Kumar</td>
          <td>@mk</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jack</td>
          <td>Lee</td>
          <td>@jl</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Suresh</td>
          <td>Raj</td>
          <td>@Sr</td>
        </tr>
      </tbody>
    </Table>
    <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas><br/><br/>

      <img src={bike}/>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>1.Rule</Accordion.Header>
        <Accordion.Body className='rule1'>
         Be on Time 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2.Rule</Accordion.Header>
        <Accordion.Body className='rule2'>
         Dont Take Leave without Informing
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>



    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
      <ToggleButton id="bg-success" value={1} style={{color:'red', backgroundColor:'orange'}}>
        WEB DEVELOPMENT
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" value={2}>
        MOBILE APP DEVELOPMENT
      </ToggleButton>
      <ToggleButton id="tbg-btn-3" value={3}>
        CLOUD
      </ToggleButton>
    </ToggleButtonGroup>
    <br/><br/><br/>

    <Navbar expand="lg" className="a2">
      <Container>
        <Navbar.Brand href="#">TEST</Navbar.Brand>
      </Container>
    </Navbar>
  
    {[false, 'sm',].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">ID</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Name</Nav.Link>
                  <NavDropdown
                    title="Activity"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Attendence</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Project
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Mobile Number
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </>
    );
}
export default Boot;