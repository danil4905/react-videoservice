import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className="navbar-wrapper">
            <NavLink exact to="/" className="navlink" activeClassName="selected">Фильмы</NavLink>
            <NavLink exact to="/channel" className="navlink" activeClassName="selected">Телеканалы</NavLink>
        </nav>
    )
};

export default Navbar;