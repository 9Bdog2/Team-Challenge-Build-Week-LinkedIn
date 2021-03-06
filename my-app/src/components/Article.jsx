import * as Icon from "react-bootstrap-icons";
import small_profile_picture from "../assets/small_profile_picture.jpg";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./css/Article.css";

function Article() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZTMxY2E4OTBjYzAwMTVjZjA3YzkiLCJpYXQiOjE2MzM5MzYxNTcsImV4cCI6MTYzNTE0NTc1N30.cQb5Rq2bVKtljqwRew41uKAJ7AUi3fQitiFeytDaAgQ",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();

        data.reverse()
        console.log(data, 'here');

        setData(data);
      } else {
        console.log("Something went wrong with the Posts request");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {data.slice(0, 8).map((element, i) => (

        <Container className="mainBox mt-1">
          <Card>
            <Card.Body className="titleMain ">
              <Row className="upper_part">
                <Col md={10}>
                  <div>
                    <p>
                      <b>Bogdan Birau</b>
                      <small className="ml-1">likes this</small>
                    </p>
                  </div>
                </Col>
                <Col md={2}>
                  <button type="button" className="btn btn-light">
                    <Icon.ThreeDots />
                  </button>
                </Col>
              </Row>
            </Card.Body>
            <Card.Body className="titleMain" style={{ fontSize: "20px" }}>
              <Row>
                <Col md={1}>
                  <div>
                    <span>
                      <img
                        src={data[i].user.image}
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
                      <b>
                        {data[i].user.name}
                        {data[i].user.surname}
                      </b>
                      &bull;
                      <small>2nd</small>
                      &bull;
                      {data[i].user.area}
                    </p>
                  </div>
                  <div>
                    <p>
                      <p>
                        <small>{data[i].user.title}</small>{" "}
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
                <Col md={2} className="follow_button">
                  <button type="button" className="btn btn-light">
                    + Follow
                  </button>
                </Col>
              </Row>
            </Card.Body>
            <Card.Body>
              <p className="content_writing">
                {data[i].text}
                <button type="button" className="btn btn-light">
                  <small>...see more</small>
                </button>
              </p>
              <img
                src={data[i].image}
                style={{
                  borderRadius: "0%",
                  height: "100px",
                  width: "100%",
                }}
              />
            </Card.Body>
            <Card.Body></Card.Body>
            <Row>
              <Col md={12}>
                <div className="d-flex align-items-baseline  social_part">
                  <button type="button" className="btn btn-light social_part">
                    <Icon.HandThumbsUp />
                  </button>
                  <button type="button" className="btn btn-light  social_part">
                    <Icon.Lightbulb />
                  </button>
                  <button type="button" className="btn btn-light  social_part">
                    <Icon.SuitHeart />
                  </button>
                  <p>23 &bull; 3 comments</p>
                </div>
              </Col>
            </Row>

            <Row className="bottom_buttons">
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
        </Container>
      ))}
    </>
  );
}

export default Article;
