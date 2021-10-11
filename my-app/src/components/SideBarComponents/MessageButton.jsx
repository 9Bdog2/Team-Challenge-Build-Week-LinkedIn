
import React from "react";

import Button from "react-bootstrap/Button";
import './PeopleViewed.css'

class MessageButton extends React.Component {


    render(){
        return(
                <Button  variant="outline-secondary" className="msgButton">
                    Connect
                </Button>
        )
    }
}


export default MessageButton