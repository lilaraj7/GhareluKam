import React, { useState, useContext } from "react";
import Logincontext from "./Context/Logincontext";
import ProfileContext from "./Context/Profilecontext";
import $ from "jquery";
import { NavLink, useNavigate } from "react-router-dom";
import { BiUser } from 'react-icons/bi';


function DropDown() {
  const { islogged, setIslogged } = useContext(Logincontext);
  const { firstname, lastname } = useContext(ProfileContext);
  const [profile, setProfile] = useState();
  const history = useNavigate();

  const handleOut = (e) => {
    e.preventDefault();
    setIslogged(false);
    history("/");
    $(".dropmenu").addClass("d-none");
  };

  const handleprofile = (e) => {
    e.preventDefault();
    setProfile(!profile);

    // $(".dropmenu").fadeOut();
  };
  // const [drop,setDrop]= useState(false)
  // const showDropdown=()=>{
  //     setDrop(true)
  // }
  // const hideDropdown=()=>{
  //     setDrop(false)
  // }
  return (
    <div className="dropmenu d-none">
     
      <ul className="drop-menu">
      <div className="pro-user">
      <BiUser/>
      <h1>{`${firstname} ${lastname}`}</h1>
      {console.log(firstname)}
      </div>
        <li className="nav-item ">
          <NavLink to="Userprofile" className="nav-link ">
            Update-profile
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink to="Property" className="nav-link ">
            Property
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink to="Changepassword" className="nav-link ">
            Change Password
          </NavLink>
        </li>
        <li className="nav-item " onClick={handleOut}>
        <button className="lobtn">LogOut</button>  
        </li>
        {/* <li onClick={handleprofile}>Profile</li>
        <li>Property</li>
        <li>Change Password</li> */}
        {/* <li onClick={handleOut}>LogOut</li> */}
      </ul>
      {/* {profile ? <Userprofile /> : null} */}
    </div>
  );
}
export default DropDown;
