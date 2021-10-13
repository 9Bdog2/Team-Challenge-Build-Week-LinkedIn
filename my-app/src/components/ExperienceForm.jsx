import React from "react";
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap";

class ExperienceForm extends React.Component {
  state = {
        addExperience: {
            role: "",
            company: "",
            startDate: "",
            endDate: "", 									// could be null
            description: "",
            area: ''
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

  postExperience = async (exp, query ='6163e31ca890cc0015cf07c9') => {
      
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
        console.log('posted')
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <>
        <Form>

            
          <Form.Group id="Role" controlId="Role">
            <Form.Label>Role</Form.Label>
            <Form.Control onChange={(e) => {
                    this.handleInput("role", e.target.value);
                  }} type="text" placeholder="QA Engineer" />
          </Form.Group>

          <Form.Group controlId="Company">
            <Form.Label>Company</Form.Label>
            <Form.Control onChange={(e) => {
                    this.handleInput("company", e.target.value);
                  }} type="text" placeholder="Facebook inc." />
          </Form.Group>

          <Form.Group controlId="Start">
            <Form.Label>Start date</Form.Label>
            <Form.Control onChange={(e) => {
                    this.handleInput("startDate", e.target.value);
                  }} type="date"  />
          </Form.Group>



          <Form.Group controlId="End">
            <Form.Label>End Date</Form.Label>
            <Form.Control onChange={(e) => {
                    this.handleInput("endDate", e.target.value);
                  }} type="date"  />
          </Form.Group>

          
          <Form.Group controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control onChange={(e) => {
                    this.handleInput("description", e.target.value);
                  }} type="text" placeholder="Changing vanilla JS to React components" />
          </Form.Group>


          <Form.Group controlId="Area">
            <Form.Label>Area</Form.Label>
            <Form.Control onChange={(e) => {
                    this.handleInput("area", e.target.value);
                  }} type="text" placeholder="SA, California" />
          </Form.Group>
          

          
          <Button variant="primary"  onClick={()=>{
                this.postExperience(this.state.addExperience)
          }}>
            Save
          </Button>
        </Form>
      </>
    );
  }
}

export default ExperienceForm;
