import React from "react";
import "./css/PostFeedComponent.css";
import { Button, Modal, Form } from "react-bootstrap";
import ImageUploader from "react-images-upload";

class PostModal extends React.Component {
  state = {
    text: {
      text: null,
    },
    experienceImage: [null],
    imageUpload: [null],
    imageUploadingLoader: false,
  };

  hideModal = () => {
    this.props.setShow(false);
  };

  postData = async (postText) => {
    let formData = new FormData();
    let blob = new Blob([this.state.imageUpload[0]], { type: "img/jpeg" });
    formData.append("experience", blob);

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: formData,
          body: JSON.stringify(postText),
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZTMxY2E4OTBjYzAwMTVjZjA3YzkiLCJpYXQiOjE2MzM5MzYxNTcsImV4cCI6MTYzNTE0NTc1N30.cQb5Rq2bVKtljqwRew41uKAJ7AUi3fQitiFeytDaAgQ",
          }),
        }
      );
      if (response.ok) {
        console.log("posted");
        this.fetchExperienceImage();
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount = async () =>{
    /* this.fetchExperienceImage(); */
  }

  componentDidUpdate = (prevProps) => {};

  render() {
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
                className="form"
                placeholder="What do you want to talk about?"
                as="textarea"
                rows={3}
                onChange={(e) => {
                  this.setState({
                    text: {
                      text: e.target.value,
                    },
                  });
                }}
              />
              <Form.Control />
              <ImageUploader
                withIcon={true}
                buttonText="Upload image"
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
                singleImage={true}
                withPreview={true}
                withLabel={false}
                onChange={this.profilePictureUploadHandler}
              />
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: 40 }}
              >
                <Button
                  variant="outline-secondary"
                  className="rounded-pill mr-2"
                  onClick={this.openUploadWindowHandler}
                  style={{ width: "40%" }}
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  className="rounded-pill"
                  style={{ width: "60%" }}
                  onClick={this.postProfilePictureHandler}
                >
                  Save Changes
                </Button>
              </div>
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


