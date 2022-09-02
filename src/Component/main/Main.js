import React, { useEffect, useState } from "react";
import "./main.css";
// import office from "../../Assets/office.png";
// import image2 from "../../Assets/image2.jpeg";
import house from "../../Assets/house.png";
import Slider from "../Slider";
import { FaUserTie } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { BsFillHouseDoorFill } from "react-icons/bs";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css/bundle";
// import { Autoplay, Pagination } from "swiper";
import Topslider from "./Topslider";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPaintBrush, FaChair } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { MdPlumbing } from "react-icons/md";

import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

const Main = () => {
  const [getproperty, setGetproperty] = useState([]);
  useEffect(() => {
    fetch(
      "https://testing.esnep.com/gharelukam/api/recent-property?Purpose=2"
    ).then((result) => {
      result.json().then((resp) => {
        console.log("result", resp);
        setGetproperty(resp.RecentPropertie);
      });
    });
  }, []);
  return (
    <div className="main-container">
      <div className="slider">
        <Topslider />
      </div>

      <div className="home-services">
        <div className="title-border">
          <h1>Home service</h1>
        </div>
        <div className="Slider-services">
          <Slider />
        </div>

        <div className="title-border">
          <h1>Best Houses for you</h1>
        </div>
        {/* <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" alt="" src={house} />
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
              <img className="card-img-top" alt="" src={house} />
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
              <img className="card-img-top" alt="" src={house} />
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
        </div> */}
 <div className="row">
          <Swiper
          
            navigation={true}
            // centeredSlides={false}
            slidesPerView={3}
            loop={true}
          >
            {getproperty.map((props)=>{
              const{UserImage,PropertyID,Purpose,Title,Address,Price,Area,AreaUnit,UserFullName}=props;
                return(
                  <SwiperSlide key={PropertyID}>
                  <div className="col-md-4">
                    <div className="card">
                      <img className="card-img-top" alt="" src={UserImage} />
                      <span className="stiker">{Purpose}</span>
                      <div className="card-body">
                        <h1 className="card-title">{Title}</h1>
                        <h5 className="h5">
                          <MdLocationPin />{Address}
                        </h5>
                        <p>
                          <span>
                            <BsFillHouseDoorFill /> {Area} {AreaUnit}
                          </span>
                          <span>Rs {Price}</span>
                        </p>
                      </div>
                      <div className="card-owner">
                        <p>
                          {UserImage} {UserFullName}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                )
            })}
           
          </Swiper>

          {/* <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" alt="" src={house} />
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
              <img className="card-img-top" alt="" src={house} />
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
              <img className="card-img-top" alt="" src={house} />
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
          </div> */}
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
          <Swiper
          
            navigation={true}
            // centeredSlides={false}
            slidesPerView={3}
            loop={true}
          >
            {getproperty.map((props)=>{
              const{UserImage,PropertyID,Purpose,Title,Address,Price,Area,AreaUnit,UserFullName}=props;
                return(
                  <SwiperSlide key={PropertyID}>
                  <div className="col-md-4">
                    <div className="card">
                      <img className="card-img-top" alt="" src={UserImage} />
                      <span className="stiker">{Purpose}</span>
                      <div className="card-body">
                        <h1 className="card-title">{Title}</h1>
                        <h5 className="h5">
                          <MdLocationPin />{Address}
                        </h5>
                        <p>
                          <span>
                            <BsFillHouseDoorFill /> {Area} {AreaUnit}
                          </span>
                          <span>Rs {Price}</span>
                        </p>
                      </div>
                      <div className="card-owner">
                        <p>
                          {UserImage} {UserFullName}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                )
            })}
           
          </Swiper>

          {/* <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" alt="" src={house} />
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
              <img className="card-img-top" alt="" src={house} />
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
              <img className="card-img-top" alt="" src={house} />
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
          </div> */}
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
          <Swiper
          
            navigation={true}
            // centeredSlides={false}
            slidesPerView={3}
            loop={true}
          >
            {getproperty.map((props)=>{
              const{UserImage,PropertyID,Purpose,Title,Address,Price,Area,AreaUnit,UserFullName}=props;
                return(
                  <SwiperSlide key={PropertyID}>
                  <div className="col-md-4">
                    <div className="card">
                      <img className="card-img-top" alt="" src={UserImage} />
                      <span className="stiker">{Purpose}</span>
                      <div className="card-body">
                        <h1 className="card-title">{Title}</h1>
                        <h5 className="h5">
                          <MdLocationPin />{Address}
                        </h5>
                        <p>
                          <span>
                            <BsFillHouseDoorFill /> {Area} {AreaUnit}
                          </span>
                          <span>Rs {Price}</span>
                        </p>
                      </div>
                      <div className="card-owner">
                        <p>
                          {UserImage} {UserFullName}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                )
            })}
           
          </Swiper>

          {/* <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" alt="" src={house} />
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
              <img className="card-img-top" alt="" src={house} />
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
              <img className="card-img-top" alt="" src={house} />
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
          </div> */}
        </div>
        {/* <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" alt="" src={house} />
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
              <img className="card-img-top" alt="" src={house} />
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
              <img className="card-img-top" alt="" src={house} />
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
        </div> */}
        <div className="title-border">
          <h1>Popular Blogs</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img className="card-img-top" alt="" src={house} />
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">Single family</h1>

                <p>
                  <span>family house</span>
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
            <img className="card-img-top" alt="" src={house} />
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">Single family</h1>

                <p>
                  <span>family house</span>
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
            <img className="card-img-top" alt="" src={house} />
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">Single family</h1>

                <p>
                  <span>family house</span>
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
