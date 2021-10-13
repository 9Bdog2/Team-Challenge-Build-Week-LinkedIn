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
      <Card>
        <Card className="Skills p-2">
          <Card.Body>
            <Row>
              <Col md={8}>
                <h4>Skills & endorsements</h4>
              </Col>
              <Col md={4}>
                <a href="">Add new skill</a>

                <Button className="msgButton ml-2"><BsPencil /></Button>
              </Col>
            </Row>
            <div>
            <Button className="msgButton" variant="outline-primary">Take Skill Quiz</Button>
            </div>
            <p>
            <span className="font-weight-bold">Teamwork</span> <span className="fw-light">10</span>
            </p>
          </Card.Body>
          <ListGroup variant="flush">
            {
              data.slice(0, 8).map((element) => (

                <ListGroup.Item key={element._id}><img src={element.image} alt="user profile"></img></ListGroup.Item>
              ))
            }
          </ListGroup>
          <Button variant="light" size="sm" className="QuizButton fw-bold">
            Show More
          </Button>{" "}
        </Card>
      </Card>
    </>
  );
};
export default Skills;
