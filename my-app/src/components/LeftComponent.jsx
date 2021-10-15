import { Container, Row, Button, Dropdown } from "react-bootstrap";
import "./LeftComponent.css";

const LeftComponent = () => {
  return (
    <div className="leftcomponent">
      <div className="addfeed">
        <h6>Add your feed</h6>

        <Container>
          <Row className="p-2">
            <img
              src="https://media.wired.com/photos/5cd04013b683182462a25235/1:1/w_1327,h_1327,c_limit/microsoft-3590-2.jpg"
              alt="satya nadela img"
              style={{ width: "60px", borderRadius: "50%" }}
            />
            <h6 className="mb-0 ml-2">
              Satya Nadella{" "}
              <img
                src="https://w7.pngwing.com/pngs/329/312/png-transparent-in-logo-linkedin-computer-icons-social-media-professional-network-service-youtube-linkedin-miscellaneous-blue-angle.png"
                alt="linkedin"
                style={{ width: "15px" }}
              />
              <p className="mb-1" style={{ fontSize: "11px" }}>
                Chairman and CEO at Microsoft
              </p>
              <Button variant="outline-secondary" className="follow">
                <i class="fas fa-plus mr-1"></i>
                Follow
              </Button>
            </h6>
          </Row>

          <Row className="p-2">
            <img
              src="data:image/jpeg;base64,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"
              alt="satya nadela img"
              style={{ width: "60px", borderRadius: "50%" }}
            />
            <h6 className="mb-0 ml-2">
              Simon Sinek{" "}
              <img
                src="https://w7.pngwing.com/pngs/329/312/png-transparent-in-logo-linkedin-computer-icons-social-media-professional-network-service-youtube-linkedin-miscellaneous-blue-angle.png"
                alt="linkedin"
                style={{ width: "15px" }}
              />
              <p className="mb-1" style={{ fontSize: "11px" }}>
                Optimistic Author at Simon Sinek inc.
              </p>
              <Button variant="outline-secondary" className="follow">
                <i class="fas fa-plus mr-1"></i>
                Follow
              </Button>
            </h6>
          </Row>
          <Row className="p-2">
            <img
              src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987"
              alt="satya nadela img"
              style={{ width: "60px", borderRadius: "50%" }}
            />
            <h6 className="mb-0 ml-2">
              Bill Gates{" "}
              <img
                src="https://w7.pngwing.com/pngs/329/312/png-transparent-in-logo-linkedin-computer-icons-social-media-professional-network-service-youtube-linkedin-miscellaneous-blue-angle.png"
                alt="linkedin"
                style={{ width: "15px" }}
              />
              <p className="mb-1" style={{ fontSize: "11px" }}>
                Co-chair,Bill and Melinda Gates
              </p>
              <Button variant="outline-secondary" className="follow">
                <i class="fas fa-plus mr-1"></i>
                Follow
              </Button>
            </h6>
          </Row>
        </Container>
        <Dropdown.Item eventKey="4" style={{ fontSize: "13px", color: "grey" }}>
          <strong>
            {" "}
            View all recommendations <i class="fas fa-arrow-right"></i>
          </strong>
        </Dropdown.Item>
      </div>
    
      <div className="footerimg">
        <img
          src="https://www.sendiancreations.com/wp-content/uploads/2019/08/LinkedIn-Marketing.jpg"
          alt="img linkedIn add"
          style={{ width: "100%" }}
        />
      </div>

    </div>
  );
};
export default LeftComponent;