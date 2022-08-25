import React, { useState, useEffect ,useContext} from "react";
import $ from "jquery";
import { gapi } from "gapi-script";
import Gregistration from "../../Pages/Gregistration";
import { BiArrowBack } from "react-icons/bi";
import Logincontext from "../Context/Logincontext";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";





const client_id =
  "422884838767-fro3igbie8ldmgp7itnfeok7q2bspa47.apps.googleusercontent.com";
const Reg=(props)=>{

    const { islogged, setIslogged } = useContext(Logincontext);
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
   
    useEffect(() => {
        function start() {
          gapi.client.init({
            clientId: client_id,
            scope: "",
          });
        }
        gapi.load("client:auth2", start);
      });


      const onSuccess = (res) => {
        console.log("login Success:", res.profileObj);
        setUserName(res.profileObj.email);
        if (username === null) {
          alert("You should fill all the box");
        } else {
          console.log("datas");
          return fetch("https://testing.esnep.com/gharelukam/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              UserName: username,
              Source: "GOOGLE",
              NotificationToken: "string",
            }),
          })
            .then((data) => data.json())
            .then((res) => {
              console.log(res.Message);
              // const respon = res.LoginOutput;
              // console.log(res.LoginOutput[0],FullName);
              if (res.Message === "Success.") {
                setTimeout(() => {
                  history("/");
    
                  $(".reg-container").fadeOut(1000);
                  setIslogged(true);
                }, 1000);
              } else if (res.Token == null) {
                
              }
              // if (res.Message === "Success.") {
              //   setIslogged(!islogged);
              //   setTimeout(() => {
              //     history("/");
              //   }, 1000);
              // } else if (res.Token == null) {
              // }
            });
        }
      };
      const onFailure = (res) => {
        console.log("Login Failed:", res);
      };
      const history = useNavigate();
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (username === null && password === null) {
          alert("You should fill all the box");
        } else {
          console.log("datas");
          return fetch("https://testing.esnep.com/gharelukam/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              UserName: username,
              Password: password,
              Source: "DEVICE",
              NotificationToken: "string",
            }),
          })
            .then((data) => data.json())
            .then((res) => {
              console.log(res.Message);
              // const respon = res.LoginOutput;
              // console.log(res.LoginOutput[0],FullName);
    
              if (res.Message === "Success.") {
                setTimeout(() => {
                  history("/");
                  $(".reg-container").fadeOut(1000);
                  setIslogged(true);
                }, 1000);
              } else if (res.Token == null) {
                alert("password dosent Matched ");
              }
            });
        }
      };
      
    
      
    return(
        <div>
        <form>
        {/* <h3>Register to  <span className="c1">Gharelu</span> <span className="c2"> Kam</span></h3> */}

        <div className="my-3">
        <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="UseName"
              onChange={(e) => setUserName(e.target.value)}
            />
        </div>
        <div className="mb-2">
        <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        {/* <div className="mb-2">
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
        </div> */}

        <button
          type="submit"
          className="btn mb-1 btn-primary"
          onClick={handleSubmit}
        >
          Login
        </button>
       
        <p>Don't have account?</p>
        <div className="h-2">
          <h2>Register with</h2>
        </div>
        <div className="mb ps-5 pt-1 w-100">
        <GoogleLogin
              clientId={client_id}
              buttonText="Login with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
        </div>
       
      </form>
      <div className='arrowback' onClick={props.nextpg}>
              <BiArrowBack/>
              Signup
           </div>
        </div>
      

    )
}
export default Reg;
