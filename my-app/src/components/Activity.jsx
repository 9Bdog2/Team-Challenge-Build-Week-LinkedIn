import { Card, Button, Dropdown } from "react-bootstrap";

const Activity = () => {
  return (
    <>
      <Card
        className="mainBox mt-0 Activity p-2
      "
      >
        <Card.Body className="titleMain " style={{ fontSize: "20px" }}>
          Activity
          <Button
            variant="outline-secondary "
            size="sm"
            className=""
            style={{ marginLeft: "75%" }}
          >
            Start a post
          </Button>{" "}
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
};
export default Activity;
