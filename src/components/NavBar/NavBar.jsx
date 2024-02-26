import { NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
    <span className='welcome'>Welcome, {user.name}!</span>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/about">Party Gem</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/about">ABOUT</Nav.Link>
            <NavDropdown title="SERVICES" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="services/catering">Catering</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="services/entertainment">Entertainment</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="services/venues">Venues & Event Spaces</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="services/vendor">
                Vendor Page
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="EVENT PLANNER" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/plans">All Plans</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="plans/new">Create a new plan</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <NavDropdown.Item as={NavLink} to="" onClick={handleLogOut}>LOG OUT</NavDropdown.Item>
    </Navbar>
    </>
  );
}

