import { Card, Button, Row, Col, ListGroup } from "react-bootstrap";
import { BsPencil } from "react-icons/bs";

const Skills = () => {
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
            <Col>
            <Button className="msgButton" variant="outline-primary">Take Skill Quiz</Button>
            </Col>
            </Row>
            <p>
            <span className="fw-bold">Teamwork</span> <span className="fw-light">10</span>
            </p>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
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
