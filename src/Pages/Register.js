import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Gregistration from "./Gregistration"
import { gapi } from "gapi-script";
const Register = () => {
  const url = "https://testing.esnep.com/gharelukam/api/register";
  // const [error, setError] = useState();
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
          alert("you are successfully registered");
          setTimeout(() => {}, 1000);
        } else {
          alert("you are not registered");
        }
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className='reg-form'>
      <h1>Register form</h1>
      <form onSubmit={(e) => handleForm(e)}>
      <div className="my-3">
        <TextField
          variant="outlined"
          margin="normal"
          type="text"
          id="FirstName"
          label="FirstName"
          className="input"
          value={data.FirstName}
          onChange={(e) => handleData(e)}
        />
        </div>
        <div className="my-3">
        <TextField
          variant="outlined"
          margin="normal"
          type="text"
          id="LastName"
          label="LastName"
          className="input"
          onChange={(e) => handleData(e)}
        />
        </div>
        <div className="my-3">
        <TextField
          variant="outlined"
          margin="normal"
          type="text"
          id="UserName"
          label="UserName"
          className="input"
          value={data.UserName}
          onChange={(e) => handleData(e)}/>
        </div>
         <div className="my-3">
         <TextField
          variant="outlined"
          margin="normal"
          required
          name="Password"
          type="password"
          id="Password"
          placeholder="password"
          className="input"
          onChange={(e) => handleData(e)}
          value={data.Password}
        />
         </div>
       
        <Button
          type="submit"
          margin="normal"
          variant="contained"
          color="secondary">
          Register
        </Button>
        <div>
          <div>
          <Gregistration/>

          </div>

        </div>
        
      </form>
    </div>
  );
};
export default Register;
