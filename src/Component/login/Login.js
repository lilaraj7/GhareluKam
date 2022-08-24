import React, { useState, useContext, useEffect } from "react";
import "./login.css";
import image3 from "../../Assets/image3.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css/bundle";
import { Autoplay, Pagination } from "swiper";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import Logincontext from "../Context/Logincontext";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

const client_id =
  "422884838767-fro3igbie8ldmgp7itnfeok7q2bspa47.apps.googleusercontent.com";

function Login(props) {
  // const navigate = useNavigate()
  const { islogged, setIslogged } = useContext(Logincontext);
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  // const [islogged,setIslogged] = useState();
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
            setIslogged(!islogged);
            setTimeout(() => {
              history("/");
            }, 1000);
          } else if (res.Token == null) {
          }
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

              $(".login-container").fadeOut(100);
              setIslogged(true);
            }, 1000);
          } else if (res.Token == null) {
            alert("password dosent Matched ");
          }
        });
    }
  };
  // const login = useGoogleLogin({
  //   onSuccess: codeResponse => console.log(codeResponse),
  //   flow: 'auth-code',
  // });

  // useEffect(()=>{
  //   google.accounts.id.initialize({
  //     client_id:"422884838767-fro3igbie8ldmgp7itnfeok7q2bspa47.apps.googleusercontent.com",
  //     callback:hanlecallbackResponse
  //   });
  // },[])

  const cross = () => {
    $(".login-container").fadeOut(100);
  };

  useEffect(() => {
    $(".login-container").fadeOut(100);
  }, []);

  // else {
  //   swal("Failed", response.message, "error");
  // }

  //   useEffect(()=>{
  // if (props.popUp){
  //   $('.login-container').fadeIn(100)
  // }else{
  //   $('.login-container').fadeOut(0)
  // }
  // },[props.popUp])
  return (
    <div className="login-container">
      <div className="top">
        <h1>
          <span> Welcome to the </span>
          <span>
            <span className="c1">Gharelu</span> <span className="c2">Kam</span>
          </span>
        </h1>
        {/* <div className="top-row1">
          <img src={gharelulogo} alt="" height="80px" width="100px" />
        </div> */}
        <div className="top-row2">
          <button className="cut" onClick={cross}>
            x
          </button>
        </div>
      </div>
      <div className="main-login-container">
        <div className="login-image">
          <Swiper
            className="mSwiper"
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            autoplay={{ delay: 2000 }}
            modules={[Pagination, Autoplay]}
          >
            <SwiperSlide className="swiper-slide">
              <img src={image3} alt=""></img>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={image3} alt=""></img>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={image3} alt=""></img>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={image3} alt=""></img>
            </SwiperSlide>
          </Swiper>
        </div>
        <form className="login-form">
          <div className="my-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email Address"
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
          <button
            type="submit"
            className="btn mb-1 btn-primary"
            onClick={handleSubmit}
          >
            Login
          </button>
          <p>Don't have account?</p>
          <div className="h-2">
            <h2>Login with</h2>
          </div>

          <div className="mb-sm-1 w-100">
            <button
              type="button"
              className="btn btn-light w-75 mx-auto d-block"
            >
              FaceBook
            </button>
          </div>

          <div className="mb w-100">
            <GoogleLogin
              clientId={client_id}
              buttonText="Login with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
            {/* <Glog/> */}
            {/* <button
                type="button"
                className="btn btn-light w-75 mx-auto d-block"
                onClick={() => <Glog />}
              >
                Google
              </button> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
