
import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class PeopleViewed extends React.Component {

    state = {
        fetchedUsers: [],


    }

    fecthUsers = async () =>{
        const url = 'https://striveschool-api.herokuapp.com/api/profile/'
        try{
            let response = await fetch(url, {
                method: 'GET',
                headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZTMxY2E4OTBjYzAwMTVjZjA3YzkiLCJpYXQiOjE2MzM5MzYxNTcsImV4cCI6MTYzNTE0NTc1N30.cQb5Rq2bVKtljqwRew41uKAJ7AUi3fQitiFeytDaAgQ",
            'Content-Type': 'application/json',
        }
            }
            )
            if(response.ok){
                let data = await response.json()
                
                this.setState({
                    fetchedUsers: data
                })
                console.log(this.state.fetchedUsers)
               
            }else{
                console.log("error");
        }

        }
        catch (error) {
            console.log(error);
          }

    }
    



 componentDidMount = () =>  {
    this.fecthUsers()
 }

  render(){
      return(
     
        <ListGroup>
            {
                this.state.fetchedUsers.length>0  &&
                this.state.fetchedUsers.map(e=>{
                    <ListGroup.Item>{e.title}</ListGroup.Item>
                })
         
             }
          
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>



      
    )
  }
}

export default PeopleViewed;
