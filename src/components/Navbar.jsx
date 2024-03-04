import React from "react";
import { NavLink } from "react-router-dom";
import ThemeIcon from "./ThemeIcon";

const Navbar = (props) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme='dark'>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Context</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <NavLink className= 'nav-link' to= '/'>Home</NavLink>
        <NavLink className= 'nav-link' to= '/about'>About</NavLink>
        <NavLink className= 'nav-link' to= '/contact'>Contact</NavLink>
        <ThemeIcon/>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar;