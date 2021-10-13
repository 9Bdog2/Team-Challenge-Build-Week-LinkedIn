import React from "react";
import "./css/PostFeedComponent.css";
import { Button, Row, Col } from "react-bootstrap";

import PostModal from  './PostModal'

class PostFeedComponent extends React.Component {
  state = {
   show: false
  };

  render() {
    return (
      <div className="mainBox PostFeedComponent marginB">
        <Row className='align-items-baseline'>
          <Col xs={0} md={2}>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGn86FG0dYz1g/profile-displayphoto-shrink_100_100/0/1553778295833?e=1639612800&v=beta&t=jkB-q-l2MUUgXC0skIZv4xQNNtOdnIzcv4Yu6H5IuaQ" 
            className="img" alt="" />
          </Col>
          <Col xs={10} className='ml-0 pl-0'>
            <Button
              onClick={() => {
                this.setState({
                  show: true,
                });
              
              }}
              className="postButton"
            >
              Create a post
            </Button>
          </Col>
        </Row>

        <PostModal show={this.state.show} setShow={(value)=>this.setState({show:value})}/>
      </div>
    );
  }
}


export default PostFeedComponent;
