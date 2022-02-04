import React from 'react';
import './Home.css';

const Home=()=>{
return(
<>
<div>
<div className='grid grid-cols-3  text-white bg-black home'> 
  <div className="pl-8 pt-24  mt-8">
  <h1 className='font-bold text-3xl pl-10 pb-5'>Hi , I am  Pauline</h1>
  <p className='h-12 w-52  justify-between'>I am a software engineer finding solution to real world problems.</p>
  </div>

  <div className="pt-5">
      <div className='mt-96 -mb-8 ml-14 '>
  <button className="text-3xl text-black bg-gray-300 h-14 w-64 rounded-3xl">LET'S TALK</button>
  <p className="text-lg ml-4">Developer/ui-ux designer</p>
  </div>
  </div>
  <div className="pt-5 mt-8">
  <img src="images/profilePic.png" alt="pauline's profile" className='ml-20'/>
  </div>
 </div>

</div>


</>);
}

export default Home;