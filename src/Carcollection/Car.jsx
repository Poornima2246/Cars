

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Carcollection from '../Carcollection/Carcollection';
import data from '../Data/Collect1.js';
import { delay, motion , inView} from "framer-motion";


 function Car() {
  return (
    <div className='relative '>
      <div 
       className='text-center items-center text-2xl'>
        <h1>Car Collection</h1>
        </div>
   <motion.div 
  //  initial={{x: -100 , opacity: 0}}
  //  whileInView ={{ x: 0 , opacity: 1}}
  //  viewport ={{once: true}}
  //  transistion ={{delay: 4 , transistion: 3}}
   className='swiper m-0 '>
     
    <Swiper
     effect={'coverflow'}
     grabCursor={false}
     centeredSlides={true}
     slidesPerView={'auto'}
     initialSlide={2}
     preventClicks ={true}
     coverflowEffect={{
      rotate: 0,
      stretch: 300,
      depth: 100,
      modifier: 2.5,
      slideShadows:  false,
    }
    }
    pagination={{ 
      el: '.swiper-pagination', 
      clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
  
    modules={[EffectCoverflow, Pagination]}
    className="mySwiper"
  >
    {data.map((item) => (
              <SwiperSlide key={item.id}  >
                <Carcollection Data={item}  />
              </SwiperSlide>
            ))}
           
               <div className="swiper-pagination"></div>
            
  </Swiper>
  </motion.div>
  </div>
  )
}

export default Car;

