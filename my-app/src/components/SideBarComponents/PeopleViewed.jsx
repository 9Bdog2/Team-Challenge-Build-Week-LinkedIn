
import React from "react";

import ListGroup from "react-bootstrap/ListGroup";
import './PeopleViewed.css'

import               MessageButton from './MessageButton.jsx'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'

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
                let fiveUsers = []
                for(let i=0; i<5; i++){
                    fiveUsers.push(data[i])

                }
                
                this.setState({
                    fetchedUsers: fiveUsers
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
        <div className="mainBox">
        <h6>People also viewed
        </h6>
        <ListGroup >
            {
                this.state.fetchedUsers.length>0  &&
                this.state.fetchedUsers.map(e=>{
                    return <ListGroup.Item className="listElement" key={e._id}>
                       <a className={'d-flex'}> 
                       <img src={e.image} />
                        

                        <p className='name'><span >{e.name + e.surname  }</span>
                        <p>{e.title} </p>
                        </p>
                       </a>
                    
                        <MessageButton/>
                    </ListGroup.Item>
                })
         
             }
          
          
        </ListGroup>

             </div>

      
    )
  }
}

export default PeopleViewed;
