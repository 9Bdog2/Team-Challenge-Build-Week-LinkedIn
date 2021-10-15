import { Row, Col, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./Interests.css";

const Urls = [
  "https://media-exp1.licdn.com/dms/image/C4D0BAQHGonrrpVjIUg/company-logo_100_100/0/1519856490321?e=1642032000&v=beta&t=ucvg6K61I7rPgjVKtV7fegpvkxGNADP4f_8qRfV5zDM",
  "https://media-exp1.licdn.com/dms/image/C560BAQEp-f9Ptu2yVQ/company-logo_100_100/0/1519856522068?e=1642032000&v=beta&t=NtDXgGyYuGrUqbOFJhguW6tY6xnTsIR4GWF5xMdk8-k",
  "https://media-exp1.licdn.com/dms/image/C560BAQEp-f9Ptu2yVQ/company-logo_100_100/0/1519856522068?e=1642032000&v=beta&t=NtDXgGyYuGrUqbOFJhguW6tY6xnTsIR4GWF5xMdk8-k",
  "https://media-exp1.licdn.com/dms/image/C560BAQEp-f9Ptu2yVQ/company-logo_100_100/0/1519856522068?e=1642032000&v=beta&t=NtDXgGyYuGrUqbOFJhguW6tY6xnTsIR4GWF5xMdk8-k",
  "https://media-exp1.licdn.com/dms/image/C560BAQEp-f9Ptu2yVQ/company-logo_100_100/0/1519856522068?e=1642032000&v=beta&t=NtDXgGyYuGrUqbOFJhguW6tY6xnTsIR4GWF5xMdk8-k",
  "https://media-exp1.licdn.com/dms/image/C560BAQEp-f9Ptu2yVQ/company-logo_100_100/0/1519856522068?e=1642032000&v=beta&t=NtDXgGyYuGrUqbOFJhguW6tY6xnTsIR4GWF5xMdk8-k",
];

const companies = [
  "Copenhagen Fintech",
  "Javascript",
  "IMPACT Commerce",
  "The New York Times",
  "HTML & CSS Learning",
  "Danmark",
];

const members = [
  "4,182 members",
  "5,000 members",
  "6,000 members",
  "6,000,000 members",
  "200,000 folowers",
  "1,000,000 members",
];

function Interests() {
  return (
    <>
      <Card className=" mt-4 mainBox Skills p-2">
        <Card.Body className=" titleMain" style={{ fontSize: "20px" }}>
          Interests
          <i class="fas fa-pen plus-icon p-2 ml-2 "></i>
        </Card.Body>
        <Card.Body>
          <Container>
            <Row>
              {companies.map((link, i) => (
                <Col md={6} key={i}>
                  <div className="interests_container">
                    <img
                      src={Urls[i]}
                      alt="fintech"
                      style={{ borderRadius: "0%" }}
                    />
                    <div className="ml-3">
                      <h3 className=" t-14 t-black t-bold ">
                        <span className="companies">{link}</span>
                      </h3>
                      <div>
                        <p className="members">{members[i]}</p>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}

export default Interests;
