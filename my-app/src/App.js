
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/SideBar'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function App() {
  return (
    <Container  >
  <Row>
    <Col md={8}>
      

    <Card >
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
    </Col>
    <Col md={4} >
      
    <Sidebar/>

    </Col>
  </Row>
 
</Container>

  );
}

export default App;
