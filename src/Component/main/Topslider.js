import { Swiper, SwiperSlide } from "swiper/react";
import office from "../../Assets/office.png";
import image2 from "../../Assets/image2.jpeg";
import "swiper/css/autoplay";
import "swiper/css/bundle";
import { Autoplay, Pagination } from "swiper";


import SwiperCore, {

  Navigation
} from "swiper/core";

SwiperCore.use([Navigation]);
 function Topslider() {
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
      <SwiperSlide className="swiper-slide">
        <img className="slideimg" src={office} alt=""></img>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img className="slideimg" src={image2} alt=""></img>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img className="slideimg" src={office} alt=""></img>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img className="slideimg" src={image2} alt=""></img>
      </SwiperSlide>
    </Swiper>

    {/* <img src={office} alt="" height="300px" width="840px" /> */}
  </div>
  );
}
export default Topslider;