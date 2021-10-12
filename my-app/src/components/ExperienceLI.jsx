import React from "react";

import ListGroup from 'react-bootstrap/ListGroup'
import './ExperienceLI.css'

class ExperienceLI extends React.Component {

    state={
      fetchedExperience: [],

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
    let obj = {
      role: "Web dev",
      company: "Google",
      startDate: "2019-06-16",
      endDate: "2019-06-16", 									// could be null
      description: "a lot of things",
      area: "SA"
  }
    this.fetchData('6163e31ca890cc0015cf07c9')
    // this.addExperiencePost('6163e31ca890cc0015cf07c9', obj )
  }  
  render(){
    return(

      <div className="mainBox">
      <h6>{this.props.title} Experiences 
      </h6>
      <ListGroup >
          {
          
             
                  this.state.fetchedExperience.length>0  &&
              this.state.fetchedExperience.map(e=>{
                  return <ListGroup.Item className="listElement" key={e._id}>
                     <a className={'d-flex'}> 
                     <img src={e.image} />
                      

                      <p className='name'><span >{e.role +' '+ e.company  }</span>
                      <p>{e.area} </p>
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
