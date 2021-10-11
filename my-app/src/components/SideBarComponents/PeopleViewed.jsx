
import React from "react";

import ListGroup from "react-bootstrap/ListGroup";
import './PeopleViewed.css'

import      MessageButton from './MessageButton.jsx'


class PeopleViewed extends React.Component {

    state = {
        fetchedUsers: [],
        moreUsers: [],
        clicked: false
        


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
                let tenUsers =[]
                for(let i=this.props.number; i<this.props.number + 5; i++){
                    fiveUsers.push(data[i])

                }
                for(let i=this.props.number; i<this.props.number + 10 ; i++){
                    tenUsers.push(data[i])

                }
                
                this.setState({
                    fetchedUsers: fiveUsers,
                    moreUsers: tenUsers,
                    clicked: false
                })
               
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
        <h6>{this.props.title}
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

             
<div className='bgButton'>
          <a className="showMore" onClick={()=>{
              
                if(this.state.clicked===true){
                    this.fecthUsers()
                }else{
                    this.setState({
                        fetchedUsers: this.state.moreUsers,
                        clicked: !this.state.clicked
                    })
                }

          }

          
          
          
          }> 
          
          
          
          {this.state.clicked ? 'Show Less' : 'Show More'} </a>


          </div>
        </ListGroup>

             </div>

      
    )
  }
}

export default PeopleViewed;
