// import React from "react";
// import { GoogleLogin } from "@react-oauth/google";
// import { useGoogleLogin } from "@react-oauth/google";
// import { hasGrantedAllScopesGoogle } from "@react-oauth/google";
// import { useNavigate } from "react-router-dom";

// const client_id =
//   "422884838767-fro3igbie8ldmgp7itnfeok7q2bspa47.apps.googleusercontent.com";

// function Glog({ setLoginButton, setLogoutbutton }) {
//     const history = useNavigate();

//   const loginHandler = () => {
//     alert("loged in");
//     setLoginButton(false);
//     setLogoutbutton(false);
//   };

//   const failureHandler = (res) => {
//     console.log("login failed", res);
//   };

//   const login = useGoogleLogin({
//     onSucesss: (tokenResponse) => {
//       console.log("successful" + tokenResponse);
//       const hasAccess = hasGrantedAllScopesGoogle(
//         tokenResponse,
//         "google-scope-1",
//         "google-scope-2",
       
//       );
      
//     },
//     flow: "auth-code",
//   }
//   );
//   return (
//     <GoogleLogin
//       clientId={client_id}
//       onSucesss={loginHandler}
//       onError={failureHandler}
//       onclick={() => login()}
//       isSignedIn={false}
//     >
//       Login with Google
//     </GoogleLogin>
//   );
// }
// export default Glog;
import React from 'react';
import { GoogleLogin } from 'react-google-login';




function Glog(){
  const onSuccess=(res)=>{
    console.log("login Success")
  }
  const onFailure =(res)=>{
    console.log("Login Failed:")
  }
  return(
    <div id='signInButton'>
      <GoogleLogin
      clientId={'422884838767-fro3igbie8ldmgp7itnfeok7q2bspa47.apps.googleusercontent.com'}
      buttonText='Login with Google'
      onSuccess={onSuccess}
      onFailure={onFailure}
      isSignedIn={true}
      />
      
    </div>
  )
}
export default Glog