 
import React from 'react';
import whatsapp from '../Asset/whats1.png';
import insta from '../Asset/insta1.png';
import face from '../Asset/facebook.png';
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import logo from '../Asset/sgcarslogo.png';

 

function Footer() {
  return (
    <div className="  bg-black" id="container">
          
{/* Column 1 */}
<div className="text-center justify-center grid grid-cols-1 md:grid-cols-3 p-5 mx-auto gap-4">

<div className="w-full h-auto flex flex-col justify-center items-center">
  <img className='w-15 h-14 ' src={logo} alt=" Logo" />
  <h1 className="text-white text-2xl mt-2">Sree Selvaganapathy Pre-Owned Cars</h1>
</div>
 

{/* Column 2 */}
<div className="w-full    h-auto">
  <h1 className="text-xl text-white">About Us</h1>

  {/* <a href="" className='text-white'>About</a> */}
   
  <ul className="list-none flex mt-6  justify-center gap-4">

    <li className="text-white   text-sm "> <a href="/">Home </a> </li>

    <li  className="text-white  text-sm">
      <a href="/Navcollection">Collection</a>
       </li>

    <li className="text-white  text-sm ">
      <a href="/Contact"  >Contact Us</a>
      </li>
  </ul>
</div>

{/* Column 3 */}
<div className="w-full">
  <h1 className="text-xl text-white">Address</h1>

     <div className='Address'>
     <div className='flex '>
      <i className='text-white  '> <FaHome/> </i>
      <p className='text-white text-wrap w-72 mx-auto'> 41/1, Tamil Sangam Rd, opposite Tamil Sangam Mandapam, Sankar Nagar, Salem, Tamil Nadu 636007</p>
     </div>
   
     <div className='flex mt-3'>
  <i className='text-white'><FaPhoneAlt/></i>
  <a className='text-white text-wrap text-center mx-auto' href="tel:+919842763438">9842763438</a>
</div>
<div className='flex mt-3 ml-3'>
  
  <a className='text-white text-wrap text-center mx-auto' href="tel:+919943563438">9943563438</a>
</div>


 </div>
</div>
</div>

{/* Social Media */}
<h2>social Media</h2>
<div className='flex justify-center gap-6 '>

  <a href="https://wa.me/9943563438" title="whatsapp "> <img src={whatsapp} alt="" className='w-6 h-6' /> </a>

  <a href="https://www.instagram.com/sg_pre_owned_cars/?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw%3D%3D" title="instagram"> <img src={insta} alt="" className='w-6 h-6' /> </a>

  <a href="https://www.facebook.com/profile.php?id=100013621632814&mibextid=LQQJ4d" title=" facebook ">
   <img src={face} alt="" className='w-6 h-6' /> </a>

</div>
 
 {/* copyright */}

 <div className=' flex justify-center ml-20 mt-3'>
 <span class="text-sm  text-gray-500    dark:text-gray-400">© 2023 SreeSelvaganapathy pre-owned cars. All Rights Reserved.
 </span>
 <a class="font-semibold" href="https://tw-elements.com/"
  >TW Elements</a>
 </div>

 </div>
    
    
       
    
  );
}

export default Footer;



