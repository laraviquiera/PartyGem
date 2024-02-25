import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import Dropdown from 'react-bootstrap/Dropdown';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
    <span className='welcome'>Welcome, {user.name}!</span>
    <nav>
      <Link to="/about">ABOUT</Link>
      &nbsp; | &nbsp;
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        SERVICES
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as={NavLink} to="Services/Catering">Catering</Dropdown.Item>
        <Dropdown.Item as={NavLink} to="Services/Entertainment">Entertainment</Dropdown.Item>
        <Dropdown.Item as={NavLink} to="Services/Venues">Venues & Event Spaces</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      &nbsp; | &nbsp;
      <Link to="/plan">YOUR EVENTS</Link>
      &nbsp; | &nbsp;
      <Link to="/plan/new">NEW PLAN</Link>
      &nbsp; | &nbsp;
      <Link to="/contact">CONTACT US</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>LOG OUT</Link>
    </nav>
    </>
  );
}