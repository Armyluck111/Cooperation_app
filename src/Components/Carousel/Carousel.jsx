import "./Carousel.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation,Pagination  } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css';
export default function Carousel(){
  return(
    <Swiper  slidesPerView={1} loop={true}   modules= {[Navigation,Pagination,Autoplay]}
    navigation
    pagination={{clickable:true}}
    autoplay
     className="Main_carousel">  
    <SwiperSlide><img className='w-100 h-100' src='/assets/Images/7.png'/></SwiperSlide>
    <SwiperSlide><img className='w-100 h-100' src='/assets/Images/3.png'/></SwiperSlide>
    <SwiperSlide><img className='w-100 h-100' src='/assets/Images/2.png'/> </SwiperSlide>
  </Swiper>
  )
}
