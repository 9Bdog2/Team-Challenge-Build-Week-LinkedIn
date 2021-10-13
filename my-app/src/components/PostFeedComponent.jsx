import React from "react";
import './css/PostFeedComponent.css'
import { Button, Row, Col } from "react-bootstrap";







class PostFeedComponent extends React.Component {




    render(){
        return(
            <div className='mainBox PostFeedComponent'>
                
                <Row>
                    <Col xs={2}>
                    <img src="" className='img' alt="" />
                    
                    </Col>
                    <Col xs={10}>
                    
                    <Button className='postButton'>Create a post</Button>
                    
                    </Col>


                </Row>
                
                


            </div>
        )
    }
}




export default PostFeedComponent