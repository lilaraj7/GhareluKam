import React from "react";
import "./main.css";
import office from "../../Assets/office.png";
import house from "../../Assets/house.png";
import Slider from "../Slider";
import { FaUserTie } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/autoplay'
import "swiper/css/bundle";
import { Autoplay,  Pagination } from "swiper";

const Main = () => {
  return (
    <div className="main-container">
      <div className="slider">
        <Swiper
          className="mSwiper"
          pagination={{
            clickable: true,
          }}
          
          slidesPerView={1}
          autoplay={{delay:2000}}
          modules={[Pagination,Autoplay]}
        >
          <SwiperSlide className="swiper-slide">
            <img src={office} alt=""></img>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={office} alt=""></img>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={office} alt=""></img>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src={office} alt=""></img>
          </SwiperSlide>
        </Swiper>

        {/* <img src={office} alt="" height="300px" width="840px" /> */}
      </div>

      <div className="home-services">
        <div className="title-border">
          <h1>Home service</h1>
        </div>
        <div className="Slider-services">
          <Slider />
        </div>
        <div className="main-icon-container"></div>

        <div className="title-border">
          <h1>Best Houses for you</h1>
        </div>
        <div className="row">
        <div className="col-md-4">
       
          <div className="card">
          <img className="card-img-top" alt="" src={house}/> 
           <span className="stiker">Sale</span>
            <div className="card-body">
              <h1 className="card-title">Single family</h1>
              <h5 className="h5">
                <MdLocationPin /> Kalimati,Kathmandu
              </h5>
              <p>
                <span>
                  <BsFillHouseDoorFill /> 2500 sqft
                </span>
                <span>Rs 90,000</span>
              </p>

            </div>
            <div className="card-owner">
            <p>
                <FaUserTie /> By Admin
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        
          <div className="card">
          <img className="card-img-top" alt="" src={house}/> 
           <span className="stiker">Sale</span>
            <div className="card-body">
              <h1 className="card-title">Single family</h1>
              <h5 className="h5">
                <MdLocationPin /> Kalimati,Kathmandu
              </h5>
              <p>
                <span>
                  <BsFillHouseDoorFill /> 2500 sqft
                </span>
                <span>Rs 90,000</span>
              </p>

            </div>
            <div className="card-owner">
            <p>
                <FaUserTie /> By Admin
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        
          <div className="card">
          <img className="card-img-top" alt="" src={house}/> 
           <span className="stiker">Sale</span>
            <div className="card-body">
              <h1 className="card-title">Single family</h1>
              <h5 className="h5">
                <MdLocationPin /> Kalimati,Kathmandu
              </h5>
              <p>
                <span>
                  <BsFillHouseDoorFill /> 2500 sqft
                </span>
                <span>Rs 90,000</span>
              </p>

            </div>
            <div className="card-owner">
            <p>
                <FaUserTie /> By Admin
              </p>
            </div>
          </div>
        </div>
        </div>
       
        <div className="best-title">
          <h1>Best House For You</h1>
          <h3>We are Offering Best Rental Services</h3>
        </div>
        <div className="title-border">
          <h1>Property on Sale</h1>
        </div>
        <div className="property-location">
          <h4>From-</h4>
          <span className="location">Kathmandu</span>
          <span className="location">Chitwan</span>
          <span className="location">Nepalgunj</span>
          <span className="location">Pokhara</span>
          <span className="location">Butwal</span>
          <span className="location">Birgungj</span>
        </div>
        <div className="row">
        <div className="col-md-4">
       
          <div className="card">
          <img className="card-img-top" alt="" src={house}/> 
           <span className="stiker">Sale</span>
            <div className="card-body">
              <h1 className="card-title">Single family</h1>
              <h5 className="h5">
                <MdLocationPin /> Kalimati,Kathmandu
              </h5>
              <p>
                <span>
                  <BsFillHouseDoorFill /> 2500 sqft
                </span>
                <span>Rs 90,000</span>
              </p>

            </div>
            <div className="card-owner">
            <p>
                <FaUserTie /> By Admin
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        
          <div className="card">
          <img className="card-img-top" alt="" src={house}/> 
           <span className="stiker">Sale</span>
            <div className="card-body">
              <h1 className="card-title">Single family</h1>
              <h5 className="h5">
                <MdLocationPin /> Kalimati,Kathmandu
              </h5>
              <p>
                <span>
                  <BsFillHouseDoorFill /> 2500 sqft
                </span>
                <span>Rs 90,000</span>
              </p>

            </div>
            <div className="card-owner">
            <p>
                <FaUserTie /> By Admin
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        
          <div className="card">
          <img className="card-img-top" alt="" src={house}/> 
           <span className="stiker">Sale</span>
            <div className="card-body">
              <h1 className="card-title">Single family</h1>
              <h5 className="h5">
                <MdLocationPin /> Kalimati,Kathmandu
              </h5>
              <p>
                <span>
                  <BsFillHouseDoorFill /> 2500 sqft
                </span>
                <span>Rs 90,000</span>
              </p>

            </div>
            <div className="card-owner">
            <p>
                <FaUserTie /> By Admin
              </p>
            </div>
          </div>
        </div>
        </div>
        <div className="title-border">
          <h1>Property on Rent</h1>
        </div>
        <div className="property-location">
          <h4>From-</h4>
          <div className="location">Kathmandu</div>
          <div className="location">Chitwan</div>
          <div className="location">Nepalgunj</div>
          <div className="location">Pokhara</div>
          <div className="location">Butwal</div>
          <div className="location">Birgungj</div>
        </div>
        <div className="row">
        <div className="col-md-4">
         
          <div className="card">
          <img className="card-img-top" alt="" src={house}/>
           <span className="stiker">Sale</span>
            <div className="card-body">
              <h1 className="card-title">Single family</h1>
              <h5 className="h5">
                <MdLocationPin /> Kalimati,Kathmandu
              </h5>
              <p>
                <span>
                  <BsFillHouseDoorFill /> 2500 sqft
                </span>
                <span>Rs 90,000</span>
              </p>

            </div>
            <div className="card-owner">
            <p>
                <FaUserTie /> By Admin
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        
          <div className="card">
          <img className="card-img-top" alt="" src={house}/>
           <span className="stiker">Sale</span>
            <div className="card-body">
              <h1 className="card-title">Single family</h1>
              <h5 className="h5">
                <MdLocationPin /> Kalimati,Kathmandu
              </h5>
              <p>
                <span>
                  <BsFillHouseDoorFill /> 2500 sqft
                </span>
                <span>Rs 90,000</span>
              </p>

            </div>
            <div className="card-owner">
            <p>
                <FaUserTie /> By Admin
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        
          <div className="card">
          <img className="card-img-top" alt="" src={house}/>
           <span className="stiker">Sale</span>
            <div className="card-body">
              <h1 className="card-title">Single family</h1>
              <h5 className="h5">
                <MdLocationPin /> Kalimati,Kathmandu
              </h5>
              <p>
                <span>
                  <BsFillHouseDoorFill /> 2500 sqft
                </span>
                <span>Rs 90,000</span>
              </p>

            </div>
            <div className="card-owner">
            <p>
                <FaUserTie /> By Admin
              </p>
            </div>
          </div>
        </div>
        </div>
        <div className="title-border">
          <h1>Popular Blogs</h1>
        </div>
        <div className="row">
        <div className="col-md-4">
        <img className="card-img-top" alt="" src={house}/> 
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Single family</h1>
            
              <p>
                <span>
                  family house
                </span>
                <span>8 august 2022</span>
              </p>

            </div>
            <div className="card-owner">
            <p>
                <FaUserTie /> By Admin
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <img className="card-img-top" alt="" src={house}/> 
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Single family</h1>
            
              <p>
                <span>
                  family house
                </span>
                <span>8 august 2022</span>
              </p>

            </div>
            <div className="card-owner">
            <p>
                <FaUserTie /> By Admin
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <img className="card-img-top" alt="" src={house}/> 
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Single family</h1>
            
              <p>
                <span>
                  family house
                </span>
                <span>8 august 2022</span>
              </p>

            </div>
            <div className="card-owner">
            <p>
                <FaUserTie /> By Admin
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
