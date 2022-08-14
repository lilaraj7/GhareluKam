import React from "react";
import "./login.css";
import gharelulogo from "../../Assets/gharelulogo.png";
import image3 from "../../Assets/image3.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css/bundle";
import { Autoplay, Pagination } from "swiper";

function Login() {
  return (
    <div className="login-container">
      <div className="top">
        <img src={gharelulogo} alt=""  height ='80px'
    width= '100px' />
      </div>
      <h1>
       <span> Welcome to the </span>
        <span> <span className='c1'>Gharelu</span> <span className="c2">Kam</span></span>
      </h1>
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
        <div className="login-form">
          <div class="my-3">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="UserName"
            />
          </div>
          <div class="mb-2">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="UserName"
            />
          </div>
          <button type="button" class="btn mb-1 btn-primary">Login</button>
          <p>Don't have account?</p>
          <div className="h-2">
          <h2>Login with</h2>
          </div>
         
          <div class="mb-1 w-100">
          <button type="button" class="btn btn-light w-75 mx-auto d-block">FaceBook</button>
          </div>
          <div class="mb w-100">
          <button type="button" class="btn btn-light w-75 mx-auto d-block">Google</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
