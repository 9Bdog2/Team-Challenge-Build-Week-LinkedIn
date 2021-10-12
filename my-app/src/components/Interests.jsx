import { Row, Col, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./Interests.css";

const imgUrl =
  "https://media-exp1.licdn.com/dms/image/C5607AQGBY2IkkqVDqg/group-logo_image-shrink_200x200/0/1631008020913?e=1634112000&v=beta&t=Wmr4cV8r3GhnKD3wh9vuRsqWJF0ETj8FYbbtstnoSis";

const companies = [
  "Copenhagen Fintech",
  "Community Guidelines",
  "Privacy & Terms",
  "Safety Center",
];

function Interests() {
  return (
    <>
      <Card>
        <Card className="Skills p-2">
          <Card.Body className=" " style={{ fontSize: "20px" }}>
            Interests
            <i class="fas fa-pen plus-icon p-2 ml-2 "></i>
          </Card.Body>
          <Card.Body>
            <Container>
              <Row>
                <Col md={6}>
                  <div className="interests_container">
                    <img src={imgUrl} alt="fintech" style={{borderRadius: "0%"}}/>
                    <div className="ml-3">
                      <h3 className=" t-14 t-black t-bold ">
                        <span className="companies">Copenhagen Fintech</span>
                      </h3>
                      <div>
                        <p className="members">4,182 members</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="interests_container">
                    <img src={imgUrl} alt="fintech" style={{borderRadius: "0%"}}/>
                    <div className="ml-3">
                      <h3 className=" t-14 t-black t-bold ">
                        <span className="companies">Copenhagen Fintech</span>
                      </h3>
                      <div>
                        <p className="members">4,182 members</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="interests_container">
                    <img src={imgUrl} alt="fintech" style={{borderRadius: "0%"}}/>
                    <div className="ml-3">
                      <h3 className=" t-14 t-black t-bold ">
                        <span className="companies">Copenhagen Fintech</span>
                      </h3>
                      <div>
                        <p className="members">4,182 members</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="interests_container">
                    <img src={imgUrl} alt="fintech" style={{borderRadius: "0%"}}/>
                    <div className="ml-3">
                      <h3 className=" t-14 t-black t-bold ">
                        <span className="companies">Copenhagen Fintech</span>
                      </h3>
                      <div>
                        <p className="members">4,182 members</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="interests_container">
                    <img src={imgUrl} alt="fintech" style={{borderRadius: "0%"}}/>
                    <div className="ml-3">
                      <h3 className=" t-14 t-black t-bold ">
                        <span className="companies">Copenhagen Fintech</span>
                      </h3>
                      <div>
                        <p className="members">4,182 members</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="interests_container">
                    <img src={imgUrl} alt="fintech" style={{borderRadius: "0%"}} />
                    <div className="ml-3">
                      <h3 className=" t-14 t-black t-bold ">
                        <span className="companies">Copenhagen Fintech</span>
                      </h3>
                      <div>
                        <p className="members">4,182 members</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Card.Body>
          <div className="p_container">
            <p className="bottom_p"> See all </p>
          </div>
        </Card>
      </Card>
    </>
  );
}

export default Interests;
