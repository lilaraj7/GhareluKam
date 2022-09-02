import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { FaPaintBrush,FaChair} from "react-icons/fa";
// import { GiElectric } from "react-icons/gi";
// import { MdPlumbing } from "react-icons/md";

import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

export default function App() {
  const [getservicelist, setGetservicelist] = useState([]);
  useEffect(() => {
    fetch("https://testing.esnep.com/gharelukam/api/all-service ")
    .then((result) => {
        result.json().then((resp) => {
          console.log("result", resp.Service);
          setGetservicelist(resp.Service);
        });
      }
    );
  }, []);
  return (
    <div className="containers">
      <Swiper
        navigation={true}
        // centeredSlides={true}
        slidesPerView={4}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {getservicelist.map((props) => {
          const { Image, ServiceName, ServiceID } = props;
          return (
            <SwiperSlide key={ServiceID}>
              <div className="main-service-container">
                <div className="home-icon">
                  <img src={Image} alt="" height='100%' width="100%"/>
                  {/* <span>{Image}</span> */}
                </div>
                <div className="service-name-icons">
                  <span>{ServiceName}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        {/* <SwiperSlide>
      
        <div className="main-service-container">
            <div className="home-icon">
              <span>
                <GiElectric className="brush" />
              </span>
            </div>
            <div className="service-name-icons">
              <span>Electrician</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            
           <div className="main-service-container">
            <div className="home-icon">
              <span>
                <MdPlumbing className="brush" />
              </span>
            </div>
            <div className="service-name-icons">
              <span>Plumber</span>
            </div>
          </div>
      </SwiperSlide>
        <SwiperSlide>
        
        <div className="main-service-container">
            <div className="home-icon">
              <span>
                <FaChair className="brush" />
              </span>
            </div>
            <div className="service-name-icons">
              <span>Furniture</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
         
        <div className="main-service-container">
            <div className="home-icon">
              <span>
                <FaPaintBrush className="brush" />
              </span>
            </div>
            <div className="service-name-icons">
              <span>Painter</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        
        <div className="main-service-container">
            <div className="home-icon">
              <span>
                <FaChair className="brush" />
              </span>
            </div>
            <div className="service-name-icons">
              <span>Furniture</span>
            </div>
          </div>
        </SwiperSlide>  */}
      </Swiper>
    </div>
  );
}
