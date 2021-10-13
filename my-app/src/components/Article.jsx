import * as Icon from "react-bootstrap-icons";
import small_profile_picture from "../assets/small_profile_picture.jpg";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import "./Article.css";
import { BsDistributeVertical } from "react-icons/bs";

function Article() {
  return (
    <>
      <Container className="">
        <Card>
          <Card>
            <Card.Body className=" ">
              <Row>
                <Col md={10}>
                  <div>
                    <p>
                      <b>Bogdan Birau</b>
                      <small>likes this</small>
                    </p>
                  </div>
                </Col>
                <Col md={2}>
                  <Icon.ThreeDots />
                </Col>
              </Row>
            </Card.Body>
            <Card.Body className=" " style={{ fontSize: "20px" }}>
              <Row>
                <Col md={1}>
                  <div>
                    <span>
                      <img
                        src={small_profile_picture}
                        className="logo"
                        width={25}
                        height={25}
                        alt="profile"
                      />
                    </span>
                  </div>
                </Col>
                <Col md={9} style={{ fontSize: " 12px" }}>
                  <div>
                    <p>
                      <b>John Smith</b>
                      &bull;
                      <small>2nd</small>
                    </p>
                  </div>
                  <div>
                    <p>
                      <p>
                        <small>Global Head of Communications and PR</small>{" "}
                      </p>
                    </p>
                  </div>
                  <div>
                    <p>
                      3h &bull; Edited &bull;
                      <Icon.Globe />
                    </p>
                  </div>
                </Col>
                <Col md={2}>
                  <button type="button" className="btn btn-light">
                    + Follow
                  </button>
                </Col>
              </Row>
            </Card.Body>
            <Card.Body>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                mollitia libero, distinctio esse exercitationem nostrum sint
                eligendi expedita ex natus placeat explicabo, est blanditiis
                dicta repellat consectetur, necessitatibus eius voluptatibus!
                <button type="button" className="btn btn-light">
                  <small>...see more</small>
                </button>
              </p>
              <image
                src="https://images.unsplash.com/photo-1634055614116-3a96869e21ed?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="placeholder"
                width={25}
                height={25}
              />
            </Card.Body>
            <Row>
              <Col md={12}>
                <div className="d-flex align-items-baseline">
                  <button type="button" className="btn btn-light">
                    <Icon.HandThumbsUp />
                  </button>
                  <button type="button" className="btn btn-light">
                    <Icon.Lightbulb />
                  </button>
                  <button type="button" className="btn btn-light">
                    <Icon.SuitHeart />
                  </button>
                  <p>23 &bull; 3 comments</p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={3} className="justify-content-spread ">
                <button type="button" className="btn btn-light">
                  <div className="d-flex justify-content-center align-items-baseline">
                    <Icon.HandThumbsUp />
                    <p className="ml-3">Like</p>
                  </div>
                </button>
              </Col>
              <Col md={3}>
                <button type="button" className="btn btn-light">
                  <div className="d-flex justify-content-center align-items-baseline">
                    <Icon.ChatText />
                    <p className="ml-3">Comment</p>
                  </div>
                </button>
              </Col>
              <Col md={3}>
                <button type="button" className="btn btn-light">
                  <div className="d-flex justify-content-center align-items-baseline">
                    <Icon.Arrow90degRight />
                    <p className="ml-3">share</p>
                  </div>
                </button>
              </Col>
              <Col md={3}>
                <button type="button" className="btn btn-light">
                  <div className="d-flex justify-content-center align-items-baseline">
                    <Icon.Cursor />
                    <p className="ml-3">send</p>
                  </div>
                </button>
              </Col>
            </Row>
          </Card>
        </Card>
      </Container>
    </>
  );
}

export default Article;
