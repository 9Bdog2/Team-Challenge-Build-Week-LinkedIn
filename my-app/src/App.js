import "bootstrap/dist/css/bootstrap.min.css";
import TopNavbar from "./components/TopNavbar";
import BottomFooter from "./components/BottomFooter";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/SideBar";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profilejumbotron from "./components/Profilejumbotron";
import ExperienceLI from "./components/ExperienceLI";
import Skills from "./components/Skills";
import Activity from "./components/Activity";
import Interests from "./components/Interests";
import PostFeedComponent from "./components/PostFeedComponent";
import LeftComponent from "./components/LeftComponent";
import Article from "./components/Article";

import { BrowserRouter as Router, Route } from "react-router-dom";
import FeedLeftSide from "./components/FeedLeftSide";

const ProfileView = () => (
  <Container>
    <Row>
      <Col md={8}>
        <Profilejumbotron />
        <Activity />
        <ExperienceLI />
        <Interests />
        <Skills />
      </Col>
      <Col md={4}>
        <Sidebar />
      </Col>
    </Row>
  </Container>
);

const FeedView = () => {
 return <Container>
    <Row>
      <Col className="px-0  mx-0" xs={3}>
        <FeedLeftSide />
      </Col>

      <Col className="justify-content-center px-0  mx-0" xs={6}>
        <Row className="">
          <Col xs={12}>
            <PostFeedComponent className="marginB" />

            <Article />
          </Col>
        </Row>
      </Col>

      <Col className="px-3  mx-0" xs={3}>
        <LeftComponent />
      </Col>
    </Row>
  </Container>;
};

function App() {
  return (
    <>
      <Router>
        <TopNavbar />

        <Route path="/user/:id" component={ProfileView} />

        <Route path="/feed/6163e31ca890cc0015cf07c9/61654628a029f500157c5ace" component={FeedView} />

      

        <BottomFooter />
      </Router>
    </>
  );
}

export default App;
