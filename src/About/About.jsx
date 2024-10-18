
import React from 'react';
import sgcars from '../Asset/sgcar.mp4';
import { delay, motion } from 'framer-motion';


export default function About() {
  return (
    <div className='z-[-1]  bg-blend-overlay	my-10 relative p-5'>
      <motion.h1 
      initial={{x: -50 , opacity:0 }}
      whileInView ={{x:0 , opacity: 1}}
      viewport ={{once: true}}
      transition  ={{delay: 1 , duration: 0.5}}
      className='text-center justify-center  text-2xl font-semibold text-black'>About Us</motion.h1>
     
     <div className=  'm-5 flex flex-col lg:flex-row  '> 
    
      <motion.video
       className=" w-full flex-row lg:w-1/2 lg:m-5 h-1/2 md:h-3/4 object-cover rounded-xl items-center"
       src={sgcars}

       loop autoPlay muted playsInline
       initial={{x: -50 , opacity:0 }}
       viewport ={{once: true}}
       whileInView ={{x:0 , opacity: 1}}
       transition  ={{delay: 1.5 , duration: 2}}
     >
     </motion.video> 
   <motion.div
      initial={{x: 50 , opacity:0 }}
      viewport ={{once: true}}
      whileInView ={{x:0 , opacity: 1}}
      transition  ={{delay: 1.5 , duration: 2}}
   className=' flex  justify-center items-center lg:w-1/3 space  lg:ml-20  mt-3'>
    <h1 class="text-black text-lg lg:text-2xl items-center justify-center leading-7 text-center"> Our mission is to provide a trustworthy and efficient marketplace where users can browse, compare, and purchase pre-owned vehicles with confidence. We offer a wide range of cars from various brands, ensuring that our customers have access to high-quality options that fit their budget and preferences. With a user-friendly interface, detailed vehicle information, and secure transaction processes, SGCars simplifies the car buying experience, making it easier and more convenient to find the perfect car</h1>
    </motion.div>
    </div>
  </div>
  
  
  )
}

