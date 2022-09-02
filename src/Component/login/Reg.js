import React, { useState, useEffect } from "react";
import $ from "jquery";
import { gapi } from "gapi-script";
import Gregistration from "../../Pages/Gregistration";
import { BiArrowBack } from "react-icons/bi";
import './reg.css'



const Reg=(props)=>{
    const url = "https://testing.esnep.com/gharelukam/api/register";

  
    const [data, setData] = useState({
      FirstName: "",
      LastName: "",
      UserName: "",
      Password: "",
      Img: "string",
      ImgType: 1,
      UserType: 2,
      ServiceID: 1,
      Source: "DEVICE",
      Device: "ANDROID",
    });
    const client_id =
      "422884838767-fro3igbie8ldmgp7itnfeok7q2bspa47.apps.googleusercontent.com";
    useEffect(() => {
      function start() {
        gapi.client.init({ clientId: client_id, scope: "" });
      }
      gapi.load("client:auth2", start);
    }, []);
  
    const handleData = (e) => {
      const newData = { ...data };
      newData[e.target.id] = e.target.value;
      setData(newData);
    };
    const handleForm = (e) => {
      e.preventDefault();
      console.log("clicked");
      return fetch(url, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          FirstName: data.FirstName,
          LastName: data.LastName,
          Username: data.UserName,
          Password: data.Password,
          Source: data.Source,
          Device: data.Device,
        }),
      })
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          if (res.StatusCode === 200) {
            alert("sucessfully Register");
            $(".reg-container").fadeOut(100);
            setTimeout(() => {}, 1000);
          } else {
            alert("you are not registered");
          }
        })
        .catch((e) => console.log(e));
    };
  
   
    return(
        <div>
          <h3>Signup</h3>
              <form>
        {/* <h3>Register to  <span className="c1">Gharelu</span> <span className="c2"> Kam</span></h3> */}

        <div className="my-3">
          <input
            type="text"
            className="input"
            id="FirstName"
            label="FirstName"
            placeholder="FirstName"
            value={data.FirstName}
            onChange={(e) => handleData(e)}
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            id="LastName"
            label="LastName"
            placeholder="LastName"
            className="input"
            onChange={(e) => handleData(e)}
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            id="UserName"
            // label="UserName"
            className="input"
            placeholder="Username"
            value={data.UserName}
            onChange={(e) => handleData(e)}
          />
        </div>
        <div className="mb-2">
          <input
            name="Password"
            type="password"
            id="Password"
            placeholder="password"
            className="input"
            onChange={(e) => handleData(e)}
            value={data.Password}
          />
        </div>

        <button
          type="submit"
          className="btn mb-1 btn-primary"
          onClick={(e) => handleForm(e)}
        >
          Register
        </button>
       
        <p>Don't have account?</p>
        <div className="h-2">
          <h2>Register with</h2>
        </div>
        <div className="mb ps-5 pt-1 w-100">
          <Gregistration />
        </div>
       
      </form>
      <div className='arrowback' onClick={props.nextpg}>
              <BiArrowBack/>
              Login
           </div>
        </div>
      

    )
}
export default Reg;
