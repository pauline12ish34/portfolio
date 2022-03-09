import React from 'react';
import Mapping from './map.js';
// import {FaPhoneAlt,IoLocationOutline } from "react-icons/fa";
// import {FaLocationArrow } from "react-icons/fa";
export default function Contact() {
     
         return(
             <>
<div class="grid grid-cols-2 ">
<div>
    <h1>Reach Us</h1>
    <h1>Location</h1> 
    
   <Mapping/>
</div>

  <div class="pl-8 ">
  <h1 className="font-bold text-2xl text-slate-500">Get In Touch</h1>
  <form className='flex flex-col gap-4 p-12'>
  <input type="text" className="border-solid border-2 border-neutral-300 w-72 h-12"/>
  <input type="text" className="border-solid border-2 border-neutral-300 w-72 h-12"/>
  <input type="text" className="border-solid border-2 border-neutral-300 w-72 h-24"/>

  <button className="text-xl text-slate-50 bg-black h-14 w-64 rounded-xl">Send Message </button>
  </form>
  </div>
 
</div>
         
             </>
         );
    
 }
