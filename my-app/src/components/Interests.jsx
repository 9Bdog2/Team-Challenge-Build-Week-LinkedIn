import { Card, Button } from "react-bootstrap";


function Interests () {
    return(
        <>
        <Card>
        <Card className="Skills p-2">
          <Card.Body className=" " style={{ fontSize: "20px" }}>
            Interests
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
    )

}

export default Interests