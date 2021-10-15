import {useState, useEffect } from 'react'
import { Card, Button, Row, Col, ListGroup } from "react-bootstrap";
import { BsPencil } from "react-icons/bs";

const Skills = () => {
  
  const [data, setData] = useState([])

  useEffect(() => {
    fetchUsers()
  }, [])
  
  const fetchUsers = async () => {
    try {
      let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/', {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZTMxY2E4OTBjYzAwMTVjZjA3YzkiLCJpYXQiOjE2MzM5MzYxNTcsImV4cCI6MTYzNTE0NTc1N30.cQb5Rq2bVKtljqwRew41uKAJ7AUi3fQitiFeytDaAgQ' 
        }
      })
      if (response.ok) {
        let data = await response.json()
        console.log(data)
        setData(data)
      } else {
        console.log('Something went wrong with the PROFILE request')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
     
        <Card className=" Skills mainBox mt-4  p-2">
          <Card.Body>
            <Row className="d-flex"> 
              <Col md={8}>
                <p className="titleExperience" style={{ fontSize: "20px" }}>Skills & endorsements</p>
              </Col>
              <Col md={4}>
               

                <Button className="msgButton ml-2"><BsPencil /></Button>
              </Col>
            </Row>
           
            <p>
            <span className="font-weight-bold">Teamwork</span> <span className="fw-light">10</span>
            </p>
          </Card.Body>
          <ListGroup variant="flush">
            {
              data.slice(0, 4).map((element) => (

                <ListGroup.Item key={element._id}><img className="imgUser" src={element.image} alt="user profile"></img></ListGroup.Item>
              ))
            }
          </ListGroup>
          <div className="bgButton">
            <a
              className="showMore"
             
            >
              {"Show More"}{" "}
            </a>
          </div>
        </Card>
     
    </>
  );
};
export default Skills;
