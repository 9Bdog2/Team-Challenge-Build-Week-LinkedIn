import React from "react";
import * as Icon from "react-bootstrap-icons";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ExperienceForm from "./ExperienceForm";

import ListGroup from 'react-bootstrap/ListGroup'
import './ExperienceLI.css'

class ExperienceLI extends React.Component {

    state={
      fetchedExperience: [],
      showAddExperience: false
    }


  
    addExperiencePost = async (query, exp) => {
      
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/"+query+"/experiences",
          {
            method: "POST",
            body: JSON.stringify(exp),
            headers: new Headers({
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZTMxY2E4OTBjYzAwMTVjZjA3YzkiLCJpYXQiOjE2MzM5MzYxNTcsImV4cCI6MTYzNTE0NTc1N30.cQb5Rq2bVKtljqwRew41uKAJ7AUi3fQitiFeytDaAgQ",
            }),
          }
        );
        if (response.ok) {
          this.fetchData();
        } else {
          console.log(response);
        }
      } catch (e) {
        console.log(e);
      }
    }

  fetchData = async (query) =>{
    const url = 'https://striveschool-api.herokuapp.com/api/profile/'+query+'/experiences'
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
  
    this.fetchData('6163e31ca890cc0015cf07c9')
    // this.addExperiencePost('6163e31ca890cc0015cf07c9', obj )
  }  
  render(){
    return(

      <div className="mainBox">
      <div className='d-flex justify-content-between align-items-end '>
      <h5 className='titleExperience'>{this.props.title} Experiences 
      </h5>
      <Icon.Plus  onClick={()=>{
        this.setState({
          ...this.state,
          showAddExperience: true
        })
      }} className='iconAddExperience' size={40} />
      </div>

      <ListGroup >
          {
          
             
                  this.state.fetchedExperience.length>0  &&
              this.state.fetchedExperience.map(e=>{
                  return <ListGroup.Item className="listElement" key={e._id}>
                     <a className={'positionJob'}> 
                     
                      

                      <h6 className='positionJob'>{e.role}</h6>
                      <p>{e.company} </p>
                      <p>{e.startDate+ ' -  '+e.endDate}</p>
                      <p>{e.area} </p>
                      
                     </a>
                  
                      
                     
                      
                      
                  </ListGroup.Item>
              })

              
              
       
           }


      </ListGroup>

      <>
      

      <Modal show={this.state.showAddExperience} onHide={()=>{
        this.setState({
          ...this.state,
          showAddExperience: false
        })
      }} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Add Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          

          
        <ExperienceForm/>





        </Modal.Body>
        
      </Modal>
    </>

           </div>

    )}

}
  
export default ExperienceLI;
