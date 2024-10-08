 


import React from 'react';
import { Collections } from '../Collection/Collection.jsx';
import data from '../Collection/Collection1.js';
import LazyLoad from 'react-lazyload';

export const NavCollection = () => {
  return (
    <div className="container mx-auto  ">
      <h2 className="text-black items-center text-center p-10 text-2xl mt-10 font-semibold">SG Collections</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-4   ">
      
        {data.map((collection) => (
          <Collections key={collection.id} collection={collection} />
        ))}
    
      </div>
    </div>
  );
};

export default NavCollection;
