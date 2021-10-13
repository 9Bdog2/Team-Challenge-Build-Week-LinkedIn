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
