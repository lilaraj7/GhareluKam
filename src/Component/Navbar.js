import React, { useState,useContext } from "react";
import "./navbar.css";
import gharelulogo from "../Assets/gharelulogo.png";
import { NavLink } from "react-router-dom";
// import Login from "./login/Login";
import Logincontext from "./Context/Logincontext";


const Navbar = () => {
  const  {islogged,setIslogged}=useContext(Logincontext)

  // const [btnshow, setBtnshow] = useState(true);
  const [popUp, setPopUp] = useState(false);

  const logoutHandle = (e) => {
    e.preventDefault();
    setPopUp(!popUp);
    setIslogged(false)
    window.location.href = "/";
  };
  const loginHandle = (e) => {
    e.preventDefault();
    setPopUp(!popUp);setIslogged(true)
    window.location.href = "/home";
  };

  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">
            <img src={gharelulogo} alt="logo" height="90px" width="150px" />
          </span>
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
                <NavLink to="home" className="nav-link ">
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
                  {!islogged ? (<button
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
                {/* <button type="button" className="btn btn-primary" onClick={exit}>
                  Logout 
                </button> */}
              </li>
              {/* <Login popUp={popUp} setPopUp={setPopUp}/> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
