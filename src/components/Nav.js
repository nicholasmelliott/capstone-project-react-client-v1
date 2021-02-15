import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ paths }) => {

  	return (
	    <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light shadow-sm">
            <a className="navbar-brand" href="/">
                <img className="ml-3 mr-3" src="grid-3x3-gap-fill.svg" width="30px" height="30px" fill="#8CD5FF" />
                <strong>SCREEN</strong>
                <i>WORX</i>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 d-md-none">
                    <li className="nav-item active"><a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
                    <li className="nav-item"><a className="nav-link disabled" href="/contact">Contact</a></li>
                </ul>
                <form className="form-inline my-2 my-lg-0"><input className="form-control mr-2 pt-0 pb-0" type="search" placeholder="Search" /></form>
                <form className="form-inline"><a className="btn btn-outline-primary ml-2" type="button" href="login">Log In</a><a className="btn btn-primary ml-2" type="button" href="signup">Sign Up</a><a className="nav-link" href="contact"> <img className="ml-2" src="phone.svg" width="30px" height="30px" /></a></form>
            </div>
      </nav>
	);  
};

export default Nav;