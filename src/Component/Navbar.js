import React, { useState, useContext } from "react";
import "./navbar.css";
import gharelulogo from "../Assets/gharelulogo.png";
import { NavLink } from "react-router-dom";
import Login from "./login/Login";
import Logincontext from "./Context/Logincontext";
import $ from "jquery";

const Navbar = () => {
  const { islogged, setIslogged } = useContext(Logincontext);

  const [btnshow, setBtnshow] = useState(true);
  // const [popUp, setPopUp] = useState(false);

  // const logoutHandle = (e) => {
  //   e.preventDefault();
  //   setPopUp(!popUp);
  //   setIslogged(false);
  //   window.location.href = "/";
  // };
  // const loginHandle = (e) => {
  //   e.preventDefault();
  //   setPopUp(!popUp);
  //   setIslogged(true);
  //   window.location.href = "/";
  // };
  // const newlogin=()=>{
  //   <Login/>
  // }
  const handleOut=(e)=>{
    e.preventDefault();
    setIslogged(false);
  }
  const handleShow = (e) => {
    e.preventDefault();
    $(".login-container").fadeIn(100);
    // setIslogged(true);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src={gharelulogo} alt="logo" className="gharlogo"/>

      <div className="container-fluid">
        {/* <span className="navbar-brand">
          </span> */}
        {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav  mb-2 mb-lg-0 align-items-center">
            <li className="nav-item ">
              <NavLink to="/" className="nav-link ">
                Home
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="Property" className="nav-link">
                Property
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="Services" className="nav-link">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="Blogs" className="nav-link">
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="Contact" className="nav-link">
                Contact
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="Register" className="nav-link">
                Register
              </NavLink>
            </li>

            <li className="nav-btn">
              {/* <button type="button"
                    className="btn btn-primary" onClick={<Login/>}>Login</button> */}
              {/* {!islogged ? (<button
                    type="button"
                    className="btn btn-primary"
                    onClick={loginHandle}
                  >
                    Login
                  </button>):(<button
                    type="button"
                    className="btn btn-primary"
                    onClick={ logoutHandle}
                  >
                    Logout
                  </button>)} 
                 <button type="button" className="btn btn-primary" >
                  Logout 
                </button> */}
        {!islogged ? (  <button className="btn btn-primary" onClick={handleShow}>login</button>):
        ( <button className="btn btn-primary" onClick={handleOut}>Logout</button>)}      
            </li>
            {btnshow ? <Login /> : null}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
