import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function ShortFormsCards() {
  return (
    <div className='h-[400px] flex-col p-4 w-full mt-10 flex justify-center items-center '>
      <div className=' capitalize text-center text-white my-10 text-5xl' >
        Our Short form edits
      </div>
      <Swiper
       
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="mySwiper flex  justify-center m-auto"
      >
       
        <SwiperSlide><img className='h-full object-cover' src="https://plus.unsplash.com/premium_photo-1711031505781-2a45c879ceac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1713054503087-e76652c1890c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1713000317866-c3506afcb46f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://plus.unsplash.com/premium_photo-1676422290422-bdf1d7eee629?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1713036610632-8bd70bcfe597?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1713054503087-e76652c1890c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1712924312776-e935a60b8b98?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1656590277881-68a65ee8eb1b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
