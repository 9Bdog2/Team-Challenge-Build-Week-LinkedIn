import React from "react";
import * as Icon from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ExperienceForm from "./ExperienceForm";
import { BrowserRouter as Router, Link, useParams ,withRouter  } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import "./ExperienceLI.css";
import ExperienceItem from "./ExperienceItem";

class ExperienceLI extends React.Component {
  state = {
    fetchedExperience: [],
    showAddExperience: false,
    showEditExperience: false,
    selectedExperience: "",
   
  };


  fetchData = async (query) => {
    


    const url =
      "https://striveschool-api.herokuapp.com/api/profile/" +
      query +
      "/experiences";
    try {
      let response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZTMxY2E4OTBjYzAwMTVjZjA3YzkiLCJpYXQiOjE2MzM5MzYxNTcsImV4cCI6MTYzNTE0NTc1N30.cQb5Rq2bVKtljqwRew41uKAJ7AUi3fQitiFeytDaAgQ",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let data = await response.json();

        this.setState({
          fetchedExperience: data,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidUpdate = (prevProps) =>{
    const id = this.props.match.params.id;

    if(prevProps.match.params.id !== id){
      this.fetchData(id);


    }
  }

  componentDidUpdate = (prevState) => {
    const id = this.props.match.params.id;

      if(prevState.showEditExperience !== this.state.showEditExperience){

         this.fetchData(id);
      }
  }


  componentDidMount = () => {
    const id = this.props.match.params.id;

   console.log(id, 'this')
    

    this.fetchData(id);
  };
  render() {
    return (
      <div className="mainBox mt-4">
        <div className="d-flex justify-content-between align-items-end ">
          <h5 className="titleExperience">{this.props.title} Experiences</h5>
          <Icon.Plus
            onClick={() => {
              this.setState({
                ...this.state,
                showAddExperience: true,
              });
            }}
            className="iconAddExperience"
            size={40}
          />
        </div>
        <Router>
          <ListGroup>
            {this.state.fetchedExperience.length > 0 &&
              this.state.fetchedExperience.map((e,) => {
                return (
                  <>
                  <Link
                      to={"/user/" +'6163e31ca890cc0015cf07c9'+ "/?id=" + e._id}
                      
                    
                    >
                    
                  </Link>

                  <ExperienceItem
                                      
                  experience={e}
                  editModal={true}
                  userID={e._id}
                  update={(value)=>this.setState({
                    ...this.state,
                    showEditExperience:value})}/>
                  
                  </>
                );
              })}
          </ListGroup>
         
        </Router>

        <>
          

          <Modal
            show={this.state.showAddExperience}
            onHide={() => {
              this.setState({
                ...this.state,
                showAddExperience: false,
              });
            }}
            animation={true}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Experience</Modal.Title>
             
              
            </Modal.Header>
            <Modal.Body>
            <ExperienceForm setShow={(value)=>this.setState({showEditExperience:value})}/>/>
              
            </Modal.Body>
          </Modal>
        </>
      </div>
    );
  }
}

export default withRouter(ExperienceLI);
