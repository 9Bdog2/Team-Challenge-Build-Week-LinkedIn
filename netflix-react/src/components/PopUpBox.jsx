import React from "react";
import { Card, Button } from "react-bootstrap";
import "./PopUpBox.css";

function PopUpBox(props) {
  return props.trigger ? (
    <div className="popupbox">
      <div className="popupbox-inner d-flex justify-content-between align-items-center">
        <h3>Create a post</h3>
        <i
          class="fas fa-times close-btn cross-btn"
          onClick={() => props.setTrigger(false)}
          style={{ cursor: "pointer" }}
        ></i>
      </div>
      {props.children}
    </div>
  ) : (
    ""
  );
}
export default PopUpBox;

// const PopUpBox = () => {
//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// };
// export default PopUpBox;
