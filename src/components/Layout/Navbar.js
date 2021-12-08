import React, { useState } from "react";
import logo from "../../Assets/logo.jpeg"
import { NavLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
    const [showMenuIcon, setShowMenuIcon] = useState(false);
    return (
        <header>
            <div className="header-wraper">
                <div className="logo-wraper">
                    <img src={logo} alt="Constrcutions Jobs" className="logo" />
                    <h1 className="nav-title">Construction Jobs</h1>
                </div>
                <div className="menu">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/Jobs">Jobs</NavLink></li>
                        <li><NavLink to="/Dashboard">Dashboard</NavLink></li>
                    </ul>
                </div>
                <div className="hamburger-menu">
                    <a href="#!" onClick={ () => setShowMenuIcon(!showMenuIcon) }>
                        <MdOutlineMenu />
                    </a>
                </div>
                <div className={ showMenuIcon? "second-menu": "second-menu-hide" }>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/Jobs">Jobs</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
