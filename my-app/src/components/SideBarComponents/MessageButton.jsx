
import React from "react";

import Button from "react-bootstrap/Button";
import './PeopleViewed.css'

class MessageButton extends React.Component {
    state ={
        sentRequest: false
    }

    render(){
        return(
                <Button onClick={()=>{
                    this.setState(
                        {
                            sentRequest: true
                        }
                    )
                }} variant="outline-secondary" className="msgButton">
                    <>{this.state.sentRequest ? 'Pending' : 'Connect'}</>
                </Button>
        )
    }
}


export default MessageButton