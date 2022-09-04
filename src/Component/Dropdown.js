import React, { useState, useContext } from "react";
import Logincontext from "./Context/Logincontext";
import ProfileContext from "./Context/Profilecontext";
import $ from "jquery";
import { NavLink, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import Addproperty from "./Addproperty";
import Addpropertycontext from "./Context/Addpropertycntext";
import Userprofile from "./Userprofile";
import Changepassword from "./main/Changepassword";

function DropDown() {
  const { addproperty, setAddproperty,updateprofile,setUpdateprofile,changepass,setChangepass } = useContext(Addpropertycontext);
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
    <>
    <div className="dropmenu d-none">
      <ul className="drop-menu">
        <div className="pro-user">
          <BiUser />
          <h1>{`${firstname} ${lastname}`}</h1>
          {console.log(firstname)}
        </div>
        <li className="nav-item "
        onClick={(e) => {
          setUpdateprofile(!updateprofile);
        }}>Update-profile</li>
        <li
          className="nav-item "
          onClick={(e) => {
            setAddproperty(!addproperty);
          }}
        >
          Property
        </li>
        <li className="nav-item "  onClick={(e) => {
          setChangepass(!changepass);}}>Change Password</li>
        <li className="nav-item " onClick={handleOut}>
          <button className="lobtn">LogOut</button>
        </li>
      </ul>
    </div>
    <Changepassword changepass={changepass}/>
    <Userprofile updateprofile={updateprofile}/>
    <Addproperty addproperty={addproperty}/>
    </>
  );
}
export default DropDown;
