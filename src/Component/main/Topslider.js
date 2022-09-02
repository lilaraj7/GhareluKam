import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// import office from "../../Assets/office.png";
// import image2 from "../../Assets/image2.jpeg";
import "swiper/css/autoplay";
import "swiper/css/bundle";
import { Autoplay, Pagination } from "swiper";

import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

function Topslider() {
  const [getslider, setGetslider] = useState([]);

  useEffect(() => {
    fetch("https://testing.esnep.com/gharelukam/api/slider").then((result) => {
      result.json().then((resp) => {
        console.log("result", resp.Slider);
        setGetslider(resp.Slider);
      });
    });
  }, []);
  console.log(getslider.SlideOrd, "sss");
  return (
    <div className="slider">
      <Swiper
        className="mSwiper"
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        autoplay={{ delay: 1000 }}
        modules={[Pagination, Autoplay]}
      >
        {getslider.map((props) => {
          const { SliderOrd, SliderUrl } = props;
          return (
            <SwiperSlide className="swiper-slide" key={SliderOrd}>
              <img className="slideimg" src={SliderUrl} alt=""></img>
            </SwiperSlide>
          );
        })}

        {/* <SwiperSlide className="swiper-slide">
        <img className="slideimg" src={image2} alt=""></img>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img className="slideimg" src={office} alt=""></img>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img className="slideimg" src={image2} alt=""></img>
      </SwiperSlide> */}
      </Swiper>

      {/* <img src={office} alt="" height="300px" width="840px" /> */}
    </div>
  );
}
export default Topslider;
