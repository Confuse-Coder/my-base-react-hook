import './Nav.scss';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <div className="topnav">
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/otp">OTP App</NavLink>
        <NavLink to="/weather">Weather App</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </div>
  );
};
export default Nav;
