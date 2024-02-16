import "./Carousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css";
;
export default function Carousel() {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      className="Main_carousel"
    >
        <SwiperSlide>
        <img className=" sliderImg w-100 h-100" src="/assets/Images/1.jpg" />
      </SwiperSlide>
         <SwiperSlide>
        <img className=" sliderImg w-100 h-100" src="/assets/Images/غيث.png" />
      </SwiperSlide>
       {/* <SwiperSlide>
        <img className="sliderImg w-100 h-100" src="/assets/Images/6.png" />
        
      </SwiperSlide> */}
   

    
     
    </Swiper>
  );
}
