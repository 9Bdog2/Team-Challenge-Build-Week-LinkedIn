import "bootstrap/dist/css/bootstrap.min.css";
import TopNavbar from './components/TopNavbar'
import BottomFooter from './components/BottomFooter'

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/SideBar'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Profilejumbotron from './components/Profilejumbotron'
import { Button } from "react-bootstrap";
import ExperienceLI from './components/ExperienceLI'
import Skills from './components/Skills'


function App() {
  return (

    <>
    <TopNavbar/>
    
    <Container  >
  <Row>
    <Col md={8}>
      
<Profilejumbotron/>
<ExperienceLI/>
<Skills/>



    </Col>
    <Col md={4} >
      
    <Sidebar/>

    </Col>
  </Row>
 
</Container>
{/* 
<BottomFooter/> */}



</>
  );
}


export default App;


