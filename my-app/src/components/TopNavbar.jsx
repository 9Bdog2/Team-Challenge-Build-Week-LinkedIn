import * as Icon from "react-bootstrap-icons";
import { Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import linkedIn_logo_initials from "../assets/linkedIn_logo_initials.png";
import small_profile_picture from "../assets/small_profile_picture.jpg";
import "./TopNavbar.css";
import Container from 'react-bootstrap/Container'

function TopNavbar() {
  return (
    <>
      <Navbar className='NavbarSizing' bg="light" expand="lg">

        <Container>
        <Navbar.Brand href="#home">
          <img
            src={linkedIn_logo_initials}
            className="logo"
            width={35}
            height={35}
            alt="profile"
          />
        </Navbar.Brand>
        <Form inline>
          <Icon.Search className="mr-2" />
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='iconsNavbar' >
          <Nav className="ml-auto iconsNavbar" >
            <div>
              <div className="top_icons_container">
                <Icon.HouseDoorFill className="top_icons" />
              </div>
              <Nav.Link href="#home" className="top_link_container">Home</Nav.Link>
            </div>
            <div className="top_icons_container">
              <Icon.PeopleFill className="top_icons" />
              <Nav.Link href="#link"  className="top_link_container">My Network</Nav.Link>
            </div>
            <div className="top_icons_container">
              <Icon.BriefcaseFill className="top_icons" />
              <Nav.Link href="#link"  className="top_link_container">Jobs</Nav.Link>
            </div>
            <div className="top_icons_container">
              <Icon.ChatRightDotsFill className="top_icons" />
              <Nav.Link href="#link"  className="top_link_container">Messaging</Nav.Link>
            </div>
            <div className="top_icons_container">
              <Icon.BellFill className="top_icons" />
              <Nav.Link href="#link"  className="top_link_container">Notifications</Nav.Link>
            </div>
            <div className="top_icons_container">
              <span>
                <a href='/user/6163e31ca890cc0015cf07c9/'>
                <img 
                  src={small_profile_picture}
                  className="logo"
                  width={25}
                  height={25}
                  alt="profile"
                />
                </a>
              </span>
              <NavDropdown title="Me" id="basic-nav-dropdown" className="top_link_container">
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
          <Nav>
            <div className="top_icons_container border-md-left">
              <Icon.Border className="top_icons" />
              <NavDropdown title="work" id="basic-nav-dropdown" className="top_link_container">
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="top_icons_container">
              <Icon.CollectionPlay className="top_icons" />
              <Nav.Link href="#link"  className="top_link_container">Learning</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>


        </Container>
      </Navbar>
    </>
  );
}

export default TopNavbar;
