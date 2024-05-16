 import { Button ,Col,Container,Row}  from "react-bootstrap";
 import {Card} from "react-bootstrap";
 import Form from 'react-bootstrap/Form';
 import Carousel from 'react-bootstrap/Carousel';
 import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Welcom to Bootstarp</h1>

<Container> 
  <Row>
    <Col>
    
         {/* <Button variant='primary'>Hello</Button> <br /> {""}
     <Button variant='secondary'>Hello</Button> <br /> {""} */}
     <Button variant='secondary'>Hello</Button>  <br />  <Button>Hello</Button>  <br /> {""}
     <Button>Hello</Button>  <br />  <Button variant='danger'>Hello</Button>  <br /> {""}
     <Button>Hello</Button>  <br />  <Button variant='danger'>Hello</Button>  <br /> {""}
     <Button>Hello</Button>  <br />  <Button>Hello</Button>  <br /> {""}
    </Col>
    <Col>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>Demo of Crads</Card.Title>
        <Card.Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet blanditiis nesciunt animi praesentium, quis delectus facilis doloremque et commodi similique corporis quia, consectetur deserunt consequatur. Commodi at iusto quaerat perspiciatis?
        </Card.Text>
        <Button variant="primary">login</Button>
      </Card.Body>
    </Card>
        </Col>
    <Col>  <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Col>
    <Col>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/150"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/150"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/150"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></Col>
  </Row>


      
     
      
   
    
      </Container>
      
    </div>
  );
}
export default App;

