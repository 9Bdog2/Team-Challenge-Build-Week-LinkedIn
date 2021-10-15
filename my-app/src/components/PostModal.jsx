import React from "react";
import "./css/PostFeedComponent.css";
import { Button, Modal, Form } from "react-bootstrap";




class PostModal extends React.Component {
    state={
        text: {
            text: null
        }
    }

  hideModal = () => {
  this.props.setShow(false)
  };

  postData = async (postText) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          body: JSON.stringify(postText),
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZTMxY2E4OTBjYzAwMTVjZjA3YzkiLCJpYXQiOjE2MzM5MzYxNTcsImV4cCI6MTYzNTE0NTc1N30.cQb5Rq2bVKtljqwRew41uKAJ7AUi3fQitiFeytDaAgQ",
          }),
        }
      );
      if (response.ok) {
        console.log(response);
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  };

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
               className='form'
                placeholder="What do you want to talk about?"
                as="textarea"
                rows={3}
                onChange={(e)=>{
                    this.setState({
                        text: {
                            text: e.target.value
                        }
                    })
                }}
              />
            </Form.Group>
          </Form>
          
          <Button className='pButton' onClick={()=>{

              this.postData(this.state.text)
              
          }} >Post</Button>
        </Modal.Body>
      </Modal>
    );
  }
}

export default PostModal