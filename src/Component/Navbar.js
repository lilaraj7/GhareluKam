import React from "react";
import "./navbar.css";
import gharelulogo from "../Assets/gharelulogo.png";
import { Link } from "react-router-dom";


const Navbar = () => {
 
  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">
            
            <img src={gharelulogo} alt="logo" height="90px" width="150px" />
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 align-items-center">
              <li className="nav-item active" > 
                <Link to="/"className="nav-link ">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="Property" className="nav-link" >
                  Property
                </Link>
              </li>
              <li className="nav-item" >
                <Link to='Services' className="nav-link" >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to='Blogs' className="nav-link"  >
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link to='Contact' className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to='Register' className="nav-link">
                  Register
                </Link>
              </li>
            
              <li className="nav-btn">
                <Link to='Login' button type="button" className="btn btn-primary">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;