import { Card, Button, Dropdown, Form } from "react-bootstrap";
import PopUpBox from "./PopUpBox";
import { useState } from "react";

function Activity() {
  const [buttonPopUp, setButtonPopUpBox] = useState(false);
  return (
    <>
      <Card
        className="Activity p-2
      "
      >
        <Card.Body className=" " style={{ fontSize: "20px" }}>
          Activity
          <Button
            variant="outline-secondary "
            size="sm"
            className=""
            style={{ marginLeft: "75%" }}
            onClick={() => setButtonPopUpBox(true)}
          >
            Start a post
          </Button>{" "}
          <PopUpBox trigger={buttonPopUp} setTrigger={setButtonPopUpBox}>
            <hr
              style={{
                color: "black",
                backgroundColor: "black",
                padding: 0,
                marginBottom: 5,
                margin: 0,
                height: 0.2,
              }}
            />
            <img
              src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"
              alt="Profile image"
              width="50px"
            />
            <div className="name">
              {" "}
              XYZ
              <Dropdown.Toggle
                variant="outline-secondary"
                id="dropdown-basic"
                style={{ margin: "10px" }}
              >
                {" "}
                <i class="fas fa-globe-asia">Anyone </i>
              </Dropdown.Toggle>
            </div>
            <Form.Group
              controlId="exampleForm.ControlTextarea1"
              className="pt-2"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="What do you want to talk about?"
              />
            </Form.Group>
            <Button variant="outline-primary">Add Hashtag</Button>
          </PopUpBox>
        </Card.Body>

        <p className="ml-2 pl-1 pr-1">
          I'm a first year Computer Science student who is knowledgeable in core
          Python and furthermore inquisitive about different backend
          technologies and software development methodologies. I'm actively
          looking for an entry level position as a junior python developer. Feel
          free to reach out to me -...
        </p>

        <Dropdown.Item eventKey="4" className=" text-center">
          See all activity
        </Dropdown.Item>
      </Card>
    </>
  );
}
export default Activity;
