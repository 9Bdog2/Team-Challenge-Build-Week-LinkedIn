import React from "react";
import "./css/PostFeedComponent.css";
import { Button, Modal, Form } from "react-bootstrap";
import ImageUploader from "react-images-upload";

class PostModal extends React.Component {
  state = {
    image: null, //to set image when file is selected
    body: {
      // to send when create the post (to create the post you send teaxt only!)
      text: ""
    }
  };

  hideModal = () => {
    this.props.setShow(false);
  };

  postData = async () => {
    let formData = new FormData();
    formData.append("post", this.state.image); // "post" is the name of the file you send to post an image. (Specified on eduflow!)

    try {
      // First request to create a post

      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: JSON.stringify(this.state.body), // I send only text in the body
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZTMxY2E4OTBjYzAwMTVjZjA3YzkiLCJpYXQiOjE2MzM5MzYxNTcsImV4cCI6MTYzNTE0NTc1N30.cQb5Rq2bVKtljqwRew41uKAJ7AUi3fQitiFeytDaAgQ"
          })
        }
      );
      if (response.ok) {
        alert("posted");
        const post = await response.json(); // I need post id from created post in order to send a second request to post image

        // Sending second request to post image

        const imgUploadResponse = await fetch(
          `https://striveschool-api.herokuapp.com/api/posts/${post._id}`,
          {
            body: formData, // in the body sending only formData with  file inside
            method: "POST",
            headers: new Headers({
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZTMxY2E4OTBjYzAwMTVjZjA3YzkiLCJpYXQiOjE2MzM5MzYxNTcsImV4cCI6MTYzNTE0NTc1N30.cQb5Rq2bVKtljqwRew41uKAJ7AUi3fQitiFeytDaAgQ"
            })
          }
        );
        console.log(imgUploadResponse);
        if (imgUploadResponse.ok) {
          alert("uploaded");
        }
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    console.log(this.state);
    return (
      <Modal
        size="lg"
        show={this.props.show}
        onHide={() => {
          this.hideModal();
        }}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Create Post
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* name and picture */}

          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                value={this.state.body.text}
                className="form"
                placeholder="What do you want to talk about?"
                as="textarea"
                rows={3}
                onChange={(e) => {
                  this.setState({
                    //properly seting text value on change
                    body: {
                      text: e.target.value
                    }
                  });
                }}
              />
              
              <ImageUploader
                withIcon={true}
                buttonText="Upload image"
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
                singleImage={true}
                withPreview={true}
                withLabel={false}
                onChange={(files) => this.setState({ image: files[0] })} // properly seting fie to the state when it is selected
              />
            </Form.Group>
          </Form>
          <Button
            className="pButton"
            onClick={() => {
              this.postData(this.state.text);
            }}
          >
            Post
          </Button>
        </Modal.Body>
      </Modal>
    );
  }
}

export default PostModal;