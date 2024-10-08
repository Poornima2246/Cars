
import React from 'react'
import '../Carcollection/Car.css';
 import LazyLoad from 'react-lazyload';
import { useNavigate } from 'react-router-dom';
import { IoArrowForwardCircle  } from "react-icons/io5";


function  Carcollection({Data}) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/Product/${Data.id}`);
  };
  return ( 
  
    
 <div   id='swiper-slide '>
  <LazyLoad height={200} offset={100} once>
  <img 
         className="m-5  ml-8 rounded-md"
         src={`${Data.img}`}
        //  src={`../Asset/${Data.img}`}
         alt={Data.brand} 
         onClick={handleViewDetails}   />

         </LazyLoad>

         <div className='items-center  justify-center flex '>
          <h2 className="card-title text-center items-center ml-2 text-black ">
           {Data.brand}
          </h2>
        <button onClick={handleViewDetails}  className='text-black  m-2 text-xl'>  <IoArrowForwardCircle />
         </button>
 
        </div>
 </div>
 
)
};
 
export default Carcollection;



 
