import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
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
      <Link to="/services">SERVICES</Link>
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