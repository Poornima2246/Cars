
import React from 'react';
// import img from '../../public/Asset/innova.png';
// import img from '/Asset/innova.png';
import img from '../Asset/innova.png';
import { useNavigate } from 'react-router-dom';
import { delay, motion , inView} from "framer-motion";
 
import '../Home/Home.css';
// import { CollectionList } from '../Collection/Collection';

function Home( ) {
  const navigate = useNavigate(); 
  return (
    <div className=' z-[-1]' id='Home'>
      <div className='container flex flex-wrap py-10 md:py-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-0 place-items-center min-h-[600px] w-full lg:max-w-full'>
          {/* Text Content */}
          <motion.div 
          class="order-2 mt-0 flex-wrap items-center justify-center space-y-1 text-center sm:order-2 " id="head">
        <motion.h1
          initial={{x:-150 , opacity:0}}
          whileInView= {{x:0, opacity: 1}}
          viewport ={{once: true}}
          transition={{delay:1 , duration: 1}} class="text-base text-black sm:text-base md:text-2xl lg:text-3xl">Drive Your Dream</motion.h1>

        <motion.p
           initial={{x:-150 , opacity:0}}
           whileInView= {{x:0, opacity: 1 }}
           viewport ={{once: true}}
           transition={{delay:1.2 , duration: 1.5}}  class="flex text-center   italic text-black sm:text-base md:text-2xl lg:text-3xl">with our prestigious <span class="ml-1   font-semibold"> SG-Cars  </span></motion.p>

        <motion.button
            initial={{x:-150 , opacity:0}}
            whileInView= {{x:0, opacity: 1}}
            viewport ={{once: true}}
            transition={{delay:1.6 , duration: 1.5}}
              className="mt-6 h-10 w-36 items-center rounded-lg border-solid bg-black p-2 text-base text-white transition-colors duration-700 hover:border-slate-950 hover:bg-white hover:text-black"
              onClick={() => navigate('/NavCollection')} // Navigate to NavCollection on button click
            >
              Check Out
            </motion.button>
      </motion.div>
          {/* Image Section */}
          <div className='order-2 flex sm:order-2 sm:m-0'>
            < motion.img 
             viewport ={{once: true}}
             initial={{x:150 , opacity:0}}
             whileInView= {{x:0, opacity: 1}}
             transition={{delay:1.3 , duration: 1.2}}
            className='w-54 sm:w-full' src={img} alt='Car Image' />
          </div>
 
        </div>
      </div>
    </div>
  );
}

export default Home;

 