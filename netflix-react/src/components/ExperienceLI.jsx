import { Card } from "react-bootstrap";

const ExperienceLI = () => {
  return (
    <>
      <Card>
        <Card className="ExperienceLI p-2">
          <Card.Body className=" " style={{ fontSize: "20px" }}>
            Experience
            <i
              class="fas fa-plus plus-icon p-2 "
              style={{ marginLeft: "75%" }}
            ></i>
          </Card.Body>

          <img
            src="https://icon-library.com/images/profile-icon-white/profile-icon-white-26.jpg"
            alt="profile"
            style={{ width: "45px" }}
            className="ml-4"
          />
        </Card>
      </Card>
    </>
  );
};
export default ExperienceLI;
