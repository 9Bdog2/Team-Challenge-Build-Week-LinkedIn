import { Card, Button } from "react-bootstrap";

const Skills = () => {
  return (
    <>
      <Card>
        <Card className="Skills p-2">
          <Card.Body className=" " style={{ fontSize: "20px" }}>
            Skills and endorsements
            <Button
              variant="outline-secondary "
              size="sm"
              className=""
              style={{ marginLeft: "73%", marginBottom: "20px" }}
            >
              See all activity
            </Button>{" "}
            <i class="fas fa-pen plus-icon p-2 ml-2 "></i>
          </Card.Body>
          <Button
            variant="outline-primary"
            size="sm"
            className="QuizButton"
            style={{ marginRight: "75%" }}
          >
            See all activity
          </Button>{" "}
        </Card>
      </Card>
    </>
  );
};
export default Skills;
