import React from "react";
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap";

class EditExperienceForm extends React.Component {

    state = {
        addExperience: {
            role: "",
            company: "",
            startDate: "",
            endDate: "", 									
            description: "",
            area: ''
        },
        currentId: this.props.id,
        currenExperience: {}

    }



    getExperience = async (query) =>{
        const url = 'https://striveschool-api.herokuapp.com/api/profile/'+'6163e31ca890cc0015cf07c9'+'/experiences/'+query
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
                    ...this.state,
                    addExperience: data
                    
                })
                
               
            }else{
                console.log("error");
        }
    
        }
        catch (error) {
            console.log(error);
          }

    }

    editExperience = async (exp,queryExperienceId, queryUserId ='6163e31ca890cc0015cf07c9' ) => {
      
        try {
          const response = await fetch(
            "https://striveschool-api.herokuapp.com/api/profile/"+queryUserId+"/experiences/"+queryExperienceId,
            {
              method: "PUT",
              body: JSON.stringify(exp),
              headers: new Headers({
                "Content-Type": "application/json",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZTMxY2E4OTBjYzAwMTVjZjA3YzkiLCJpYXQiOjE2MzM5MzYxNTcsImV4cCI6MTYzNTE0NTc1N30.cQb5Rq2bVKtljqwRew41uKAJ7AUi3fQitiFeytDaAgQ",
              }),
            }
          );
          if (response.ok) {
            console.log(this.props.id)
          } else {
            console.log(response);
          }
        } catch (e) {
          console.log(e);
        }
      }

      handleInput = (key, value) =>{
      
        this.setState({
            addExperience: {
                ...this.state.addExperience,
                [key]:value,
            }
        })
        

  }

  deleteExperience = async (queryExperienceId, queryUserId ='6163e31ca890cc0015cf07c9' ) => {
      
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/"+queryUserId+"/experiences/"+queryExperienceId,
        {
          method: "DELETE",
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZTMxY2E4OTBjYzAwMTVjZjA3YzkiLCJpYXQiOjE2MzM5MzYxNTcsImV4cCI6MTYzNTE0NTc1N30.cQb5Rq2bVKtljqwRew41uKAJ7AUi3fQitiFeytDaAgQ",
          }),
        }
      );
      if (response.ok) {
        console.log(this.props.id)
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  }

  handleInput = (key, value) =>{
  
    this.setState({
        addExperience: {
            ...this.state.addExperience,
            [key]:value,
        }
    })
    

}

componentDidUpdate =(prevProps ) =>{

    if(prevProps !== this.props){
        this.getExperience(this.props.id)

        

    }

}

componentDidMount = () =>{
    this.getExperience(this.props.id)


}

  render() {
    return (
      <>
        <Form>
          <Form.Group id="Role" controlId="Role">
            <Form.Label>Role</Form.Label>
            <Form.Control
              onChange={(e) => {
                  console.log(this.props.id)
                this.handleInput("role", e.target.value);
              }}
              value={this.state.addExperience.role}
              
            
              type="text"
              placeholder="QA Engineer"
            />
          </Form.Group>

          <Form.Group controlId="Company">
            <Form.Label>Company</Form.Label>
            <Form.Control
              onChange={(e) => {
                this.handleInput("company", e.target.value);
              }}
              value={this.state.addExperience.company}
              type="text"
              placeholder="Facebook inc."
            />
          </Form.Group>

          <Form.Group controlId="Start">
            <Form.Label>Start date</Form.Label>
            <Form.Control
              onChange={(e) => {
                this.handleInput("startDate", e.target.value);
              }}
              value={this.state.addExperience.startDate}
              type="date"
            />
          </Form.Group>

          <Form.Group controlId="End">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              onChange={(e) => {
                this.handleInput("endDate", e.target.value);
              }}
              value={this.state.addExperience.endDate}

              type="date"
            />
          </Form.Group>

          <Form.Group controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={(e) => {
                this.handleInput("description", e.target.value);
              }}
              type="text"
              value={this.state.addExperience.description}

              placeholder="Changing vanilla JS to React components"
            />
          </Form.Group>

          <Form.Group controlId="Area">
            <Form.Label>Area</Form.Label>
            <Form.Control
              onChange={(e) => {
                this.handleInput("area", e.target.value);
              }}
              value={this.state.addExperience.area}

              type="text"
              placeholder="SA, California"
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={() => {
              this.editExperience(this.state.addExperience,  this.props.id);
            }}
          >
            Save
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              this.deleteExperience(this.props.id);
            }}
          >
            Delete
          </Button>
        </Form>
      </>
    );
  }
}

export default EditExperienceForm;
