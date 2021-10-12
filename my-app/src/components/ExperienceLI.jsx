import React from "react";

import ListGroup from 'react-bootstrap/ListGroup'
import './ExperienceLI.css'

class ExperienceLI extends React.Component {

    state={
      fetchedExperience: [],

    }




  fetchData = async (query) =>{
    const url = 'https://striveschool-api.herokuapp.com/api/profile/'+query+'/experiences'
    try{
        let response = await fetch(url, {
            method: 'GET',
            headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY1M2RjMmEwMjlmNTAwMTU3YzVhYzEiLCJpYXQiOjE2MzQwMjQ4OTgsImV4cCI6MTYzNTIzNDQ5OH0.2KFhYiMME1l87hLbFrmt3vhJkFLswovXieLuT8OMPbE",
        'Content-Type': 'application/json',
    }
        }
        )
        if(response.ok){
            let data = await response.json()
        
            console.log(data)
            this.setState({
              fetchedExperience: data
                
            })
           
        }else{
            console.log("error");
    }

    }
    catch (error) {
        console.log(error);
      }

}

  componentDidMount = () => {
    this.fetchData('5d925e677360c41e0046d1f5')
  }  
  render(){
    return(

      <div className="mainBox">
      <h6>{this.props.title}
      </h6>
      <ListGroup >
          {
          
             
                  this.state.fetchedExperience.length>0  &&
              this.state.fetchedExperience.map(e=>{
                  return <ListGroup.Item className="listElement" key={e._id}>
                     <a className={'d-flex'}> 
                     <img src={e.image} />
                      

                      <p className='name'><span >{e.name + e.surname  }</span>
                      <p>{e.title} </p>
                      </p>
                     </a>
                  
                      
                     
                      
                      
                  </ListGroup.Item>
              })

              
              
       
           }


      </ListGroup>

           </div>

    )}

}
  
export default ExperienceLI;
