import React from 'react';
import { NavLink } from 'react-router-dom';
import {ReactComponent as BeeLogo} from '../navIMGs/bee.svg';
import mainImg from '../navIMGs/grid-3x3-gap-fill.svg';

const Nav = ({ paths, weather }) => {

  	return (
	    <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light shadow-sm">
            <a className="navbar-brand" href="/">
                <img className="ml-3 mr-3" src={mainImg} width="30px" height="30px" fill="#8CD5FF" />
                <strong class="d-none d-sm-inline">SCREEN</strong>
                <i class="d-none d-sm-inline">WORX</i>
                <strong class="d-inline d-sm-none">S</strong>
                <i class="d-inline d-sm-none">W</i>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mb-2 mt-lg-0 d-md-none">
                    <li className="nav-item"><a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
                    {/* <li className="nav-item"><a className="nav-link disabled" href="/contact">Contact</a></li> */}
                    <li className="nav-item"><a className="nav-link" href="/insects">Insects in Your Area<BeeLogo className="ml-2" height="30px" /></a></li>
                </ul>
                <a class="d-none d-md-block bee-nav-btn" href="insects">
                    <BeeLogo className="mr-3" height="30px" />
                </a>
                <a href="https://www.metaweather.com/" style={{textDecoration: "none", color: "green"}}>
                    <div class="d-inline-flex align-items-center pl-3 pr-3" style={{backgroundColor: "#EBEBEB", borderRadius: 5 + "px"}}>
                        <p class="m-0 mr-3 text-right">{weather.title}<br/>{weather.currTemp ? parseInt(weather.currTemp * 9 / 5 + 32) + "°" : ""}</p>
                        <img height="30px" src={weather.weatherIMG} />
                    </div>
                </a>
                {/* Future Features */}
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-2 pt-0 pb-0" type="search" placeholder="Search" />
                </form>
                <div class="dropdown">
                    <button class="btn btn-outline-primary ml-2 dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Log In
                    </button>
                    <form class="dropdown-menu dropdown-menu-right p-4">
                        <div class="form-group">
                          <label for="exampleDropdownFormEmail2">Email address</label>
                          <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
                        </div>
                        <div class="form-group">
                          <label for="exampleDropdownFormPassword2">Password</label>
                          <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
                        </div>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" id="dropdownCheck2" />
                          <label class="form-check-label" for="dropdownCheck2">
                            Remember me
                          </label>
                        </div>
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </form>
                </div>
                <div class="dropdown">
                    <button class="btn btn-primary ml-2 dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sign Up
                    </button>
                    <form class="dropdown-menu dropdown-menu-right p-4">
                        <div class="form-group">
                          <label for="email">Email address</label>
                          <input type="email" class="form-control" id="email" placeholder="email@example.com" />
                        </div>
                        <div class="form-group">
                          <label for="password">Password</label>
                          <input type="password" class="form-control" id="password" placeholder="Password" />
                        </div>
                        <div class="form-group">
                          <label for="confirmPassword">Confirm Password</label>
                          <input type="password" class="form-control" id="confirmPassword" placeholder="Password" />
                        </div>
                        <button type="submit" class="btn btn-primary">Sign Up</button>
                    </form>
                </div> */}
            </div>
      </nav>
	);  
};

export default Nav;