import {
  Card,
  Button,
  Dropdown,
  InputGroup,
  FormControl,
  OverlayTrigger,
  Tooltip,
  Badge,
} from "react-bootstrap";
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
                marginBottom: 7,
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
            <InputGroup className="mb-3 mt-3 ">
              <FormControl
                className="inputgroup"
                placeholder="Username"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            {/* <Form.Group
              controlId="exampleForm.ControlTextarea1"
              className="pt-2"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="What do you want to talk about?"
              />
            </Form.Group> */}
            <Button variant="outline-primary">Add Hashtag</Button>
            <footer>
              <OverlayTrigger
                overlay={<Tooltip id="tooltip-disabled">Add a photo</Tooltip>}
              >
                <span className="d-inline-block">
                  <i
                    class="fas fa-image photo m-2 mr-3 "
                    style={{ pointerEvents: "none" }}
                  ></i>
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                overlay={<Tooltip id="tooltip-disabled">Add a video</Tooltip>}
              >
                <span className="d-inline-block">
                  <i
                    class="fas fa-video photo m-2 mr-3"
                    style={{ pointerEvents: "none" }}
                  ></i>
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                overlay={
                  <Tooltip id="tooltip-disabled">Add a document</Tooltip>
                }
              >
                <span className="d-inline-block">
                  <i
                    class="fas fa-file photo m-2 mr-3"
                    style={{ pointerEvents: "none" }}
                  ></i>
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                overlay={
                  <Tooltip id="tooltip-disabled">
                    Share that you're hiring
                  </Tooltip>
                }
              >
                <span className="d-inline-block">
                  <i
                    class="fas fa-briefcase photo m-2 mr-3"
                    style={{ pointerEvents: "none" }}
                  ></i>
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                overlay={
                  <Tooltip id="tooltip-disabled">Celebrate an occasion</Tooltip>
                }
              >
                <span className="d-inline-block">
                  <i
                    class="fas fa-certificate photo m-2 mr-3"
                    style={{ pointerEvents: "none" }}
                  ></i>
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                overlay={<Tooltip id="tooltip-disabled">Create a poll</Tooltip>}
              >
                <span className="d-inline-block">
                  <i
                    class="fas fa-poll photo m-2 mr-3"
                    style={{ pointerEvents: "none" }}
                  ></i>
                </span>
              </OverlayTrigger>
              <OverlayTrigger
                overlay={<Tooltip id="tooltip-disabled">Add the post</Tooltip>}
              >
                <span className="d-inline-block">
                  <i
                    class="fas fa-ellipsis-h sm m-2 mr-3"
                    style={{ pointerEvents: "none" }}
                  ></i>
                </span>
              </OverlayTrigger>
              <Badge pill variant="primary" className="ml-5 mb-3">
                Post
              </Badge>
            </footer>
          </PopUpBox>
        </Card.Body>
        <h6 className="ml-2 pl-1 pr-1" style={{ color: "blue" }}>
          {" "}
          300 followers
        </h6>
        <p className="ml-2 pl-1 pr-1">
          Postsyou created, shared, or commented on in the last 90days are
          displayed here.
        </p>

        <Dropdown.Item eventKey="4" className=" text-center">
          See all activity
        </Dropdown.Item>
      </Card>
    </>
  );
}
export default Activity;
