import "bootstrap/dist/css/bootstrap.min.css";
import TopNavbar from './components/TopNavbar'
import BottomFooter from './components/BottomFooter'

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/SideBar'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Profilejumbotron from './components/Profilejumbotron'


function App() {
  return (

    <Container  >
  <Row>
    <Col md={8}>
      
<Profilejumbotron/>

    </Col>
    <Col md={4} >
      
    <Sidebar/>

    </Col>
  </Row>
 
</Container>


  );
}


export default App;


