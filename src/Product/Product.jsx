import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { BsFuelPumpDieselFill } from "react-icons/bs";
import { IoIosSpeedometer } from "react-icons/io";
import { FaMoneyCheck } from "react-icons/fa6";

export const Product = ({ collections, Collect }) => {
  const { id } = useParams();

 
  const product = collections.find(item => item.id === id || item.id === parseInt(id, 10)) ||
    Collect.find(item => item.id === id || item.id === parseInt(id, 10)) ||
    {};

 
  const [mainImage, setMainImage] = useState(product.img);
  const [showMore, setShowMore] = useState(false);

  
  if (!product.id) {
    return <div>Product not found</div>;
  }

  const handleImageClick = (img) => {
    setMainImage(img);
  };

  return (
    <LazyLoad>
      <div className="max-w-8xl mt-5 mx-auto p-6">
        <div className="flex flex-col lg:flex-row p-6 rounded-lg shadow-lg">
          {/* Text Content */}
          <div className="bg-gradient-to-r from-slate-100 to-gray-300  h-1/2 lg:h-96 rounded-xl shadow-xl lg:flex-1 lg:mt-10 p-4 order-3 text-black">
            <h1 className='text-2xl justify-center text-center font-thin'>Car Details</h1>
            <div className='text-center mt-6'>
              <h1 className="text-3xl font-bold mb-4">{product.brand}</h1>
              <p className="text-lg mb-2"><span className='font-bold'>Price</span>: Rs <span className='font-semibold text-xl'>{product.price}</span></p>

              <p className='text-center text-m text-wrap '>
                {product.mode} {product.brand}, {product.owner}, well-maintained with a clean {product.insurance}. This <span className='font-semibold'>{product.oil}</span> vehicle has only traveled <span className='font-bold'>{product.distance}</span>  
                {showMore && (
                  <> ensuring it's in excellent condition. Ideal for those looking for a reliable and efficient ride with a solid performance history. Don't miss out on this great opportunity!</>
                )}
              </p>

              <button className='text-blue-500 mt-2' onClick={() => setShowMore(!showMore)}>
                {showMore ? 'Show Less' : 'Show More'}
              </button>
            </div>

            <div className=' lg:flex  gap-4 justify-center mt-5'>
              <div className=' flex ml-2'>
                <i><BsFuelPumpDieselFill /></i>
                <h3 className=' ml-5'>{product.oil}</h3>
              </div>
              <div className='flex ml-2'>
                <i className="text-xl"><IoIosSpeedometer /></i>
                <h3 className=' ml-5'>{product.distance}</h3>
              </div>
              <div className='flex ml-2'>
                <i className="text-xl"><FaMoneyCheck /></i>
                <h3 className=' ml-5'>{product.insurance}</h3>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="lg:flex-1 p-2 mx-auto items-end">
            {/* Main image */}
            <img className="rounded-2xl w-full ml-2 lg:ml-14 mb-2 lg:w-96 h-72 lg:h-96 object-fit" src={`${mainImage}`} alt={product.brand} />

            {/* Thumbnails */}
            <div className='flex flex-wrap gap-3 justify-center lg:justify-start ml-4 order-2' id='productimg'>
            <LazyLoad height={200} offset={100} once>
              <img src={`${product.img1}`} className=" md:w-28 md:h-28 object-fit rounded-lg cursor-pointer" onClick={() => handleImageClick(product.img1)} />
              </LazyLoad>
              <LazyLoad height={200} offset={100} once>
              <img src={`${product.img2}`} className="md:w-28 md:h-28 object-cover rounded-lg cursor-pointer" onClick={() => handleImageClick(product.img2)} />
              </LazyLoad>
               <LazyLoad height={200} offset={100} once>
              <img src={`${product.img3}`} className="md:w-28 md:h-28 object-cover rounded-lg cursor-pointer" onClick={() => handleImageClick(product.img3)} />
              </LazyLoad>
              <LazyLoad height={200} offset={100} once>
              <img src={`${product.img4}`} className="md:w-28 md:h-28 object-cover rounded-lg cursor-pointer" onClick={() => handleImageClick(product.img4)} />
              </LazyLoad>
            </div>

            
          </div>
        </div>
      </div>
    </LazyLoad>
  );
};

export default Product;

 