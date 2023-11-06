import React from "react";
import {Link, NavLink} from "react-router-dom";
import logo from "../assets/action-comics.svg";


function Header () {
    return (
        <header> 
        <Link to="/" className="logo"> 
        <img src= {logo} alt="ReactJs"/> ReactJs
        </Link> 

        <nav> 
            <NavLink to= "/">Home </NavLink>
            <NavLink to= "/comics">Comics </NavLink>
            <NavLink to= "/about">About </NavLink>

        </nav>
        
    </header>
    );
}

export default Header;