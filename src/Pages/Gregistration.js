import React, { useState } from "react";

import { GoogleLogin } from "react-google-login";
const GoogleRegister = () => {
  //   const username = res.profileObj.email;
  const client_id =
    "422884838767-fro3igbie8ldmgp7itnfeok7q2bspa47.apps.googleusercontent.com";
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
    Source: "GOOGLE",
    Device: "ANDROID",
  });
  // this is register function
  const registerHandler = (res) => {
    console.log(res.profileObj.givenName);
    console.log(res.profileObj.familyName);
    const newData = { ...data };
    newData.FirstName = res.profileObj.givenName;
    newData.LastName = res.profileObj.familyName;
    newData.UserName = res.profileObj.email;
    newData.Password = res.profileObj.googleId;
    setData(newData);
    console.log(res.profileObj);
    // e.preventDefault();
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
  const failureHandler = (res) => {
    console.log("login failed", res);
  };
  return (
    <GoogleLogin
      clientId={client_id}
      buttonText="login with google"
      onSuccess={(e) => registerHandler(e)}
      onError={failureHandler}
      cookiePolicy="single_host_origin"
      isSignedIn={false}
    >
      Signup with Google
    </GoogleLogin>
  );
};

export default GoogleRegister;
