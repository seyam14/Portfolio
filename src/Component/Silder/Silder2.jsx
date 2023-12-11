
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Slide1 from '../../assets/Slider2/online 1.png'
import Slide2 from '../../assets/Slider2/online 2.png'
import Slide3 from '../../assets/Slider2/online 3.png'
import Slide4 from '../../assets/Slider2/online 4.png'
import Slide5 from '../../assets/Slider2/online 5.png'



export default function Silder2() {
    
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-xl"
      >
        <SwiperSlide><img className='w-full h-48' src={Slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-48' src={Slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-48' src={Slide3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-48' src={Slide4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-48' src={Slide5} alt="" /></SwiperSlide>  
      </Swiper>
    </>
  );
}