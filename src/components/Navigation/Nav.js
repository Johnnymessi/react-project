import './Nav.scss';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (

        <div className='topnav'>
            <NavLink activeClassName="active" to="/" exact>Home</NavLink>
            <NavLink to="/product">Product Apps</NavLink>
            <NavLink to="/weather">Weather Apps</NavLink>
            <NavLink to="/otp">OTP App</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>

    )
}

export default Nav;