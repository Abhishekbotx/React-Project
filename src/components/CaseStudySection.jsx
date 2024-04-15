import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';
import CaseStudiecard from './CaseStudies';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function CaseStudySection() {
  return (
    <div className='h-[900px] pb-30  flex-col bg-black p-4 w-full mt-10 flex justify-center items-center '>
      <div className=' capitalize text-center text-white my-10 text-5xl' >
        Our Short form edits
      </div>
      <Swiper
       
        slidesPerView={1}
        
        navigation={true}
        
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="mySwiper"
      >
       
        <SwiperSlide>
            <CaseStudiecard></CaseStudiecard>
        </SwiperSlide>
        <SwiperSlide>
            <CaseStudiecard></CaseStudiecard>
        </SwiperSlide>
        <SwiperSlide>
            <CaseStudiecard></CaseStudiecard>
        </SwiperSlide>
        <SwiperSlide>
            <CaseStudiecard></CaseStudiecard>
        </SwiperSlide>
        
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
}
