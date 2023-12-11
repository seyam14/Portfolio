
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Slide1 from '../../assets/Silder1/fitff 1.png'
import Slide2 from '../../assets/Silder1/fitff2.png'
import Slide3 from '../../assets/Silder1/fitff3.png'
import Slide4 from '../../assets/Silder1/fitff4.png'
import Slide5 from '../../assets/Silder1/fitff5.png'
import Slide6 from '../../assets/Silder1/fitff6.png'
import Slide7 from '../../assets/Silder1/fitff7.png'
import Slide8 from '../../assets/Silder1/fitff8.png'


export default function Silder1() {
    
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
        <SwiperSlide><img className='w-full h-48' src={Slide6} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-48' src={Slide7} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-48' src={Slide8} alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}