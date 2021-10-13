import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PeopleViewed from './SideBarComponents/PeopleViewed' 

class Sidebar extends React.Component {
  render() {
    return (
      <>
        <PeopleViewed title='People also viewed' number={5} />

        <PeopleViewed title='People you may know' number={15}/>

        <div>


            
        </div>

      </>
    );
  }
}

export default Sidebar;
