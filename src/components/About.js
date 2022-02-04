import React from 'react';
 const About=()=>{
return(
    <>
    <div>
<p className='px-72'>I am a software engineering student at Rwanda Coding Academy .I am willing to work, study new technology and solve problems.</p>

<div class="grid grid-cols-3 ">
<div></div>

<div className='text-center'>
<h1 className='font-bold text-2xl pl-12 '>My work</h1>  
<p className='justify-between'>This is a mobile  application  for the lights management system. it uses Embeded sytems,to light bulbs of the streets automatically
     without person interaction. This depends on time at nights lights on, in day lights off.</p>
     {/* it was done due to road accidenrts which happened at night people could collide with 
     cars  in the darkness .this app came as the solution as it sense darkness and 
    switch all lights on the streets. it also reports lightds which have issues. */}
</div>
<div></div>

</div>


    
<div className='pl-24'>
    <h1 className='font-bold text-2xl pl-12 '>What I  know</h1>
    <p> Java programming language : I can build different applications using spring boot  frame work, (Swing and AWT) for desktop application and pure java application </p>
    <p>  Java_script (js) : It’s a scripting language , I  am a full stack here , I use react and angular framework for front end development and nodeJs for backend development.   </p>
    <p>  Embeded Systems : I can do different applications with embeded C using arduino board, Node mcu and Rapsbery PI.     </p>
    <p>  HTML and CSS : I can work  on the font end side of programming using html and Css </p>
    <p>  I also try UI/Ux designing </p>
 </div>
 </div>
    </>
);

 }

 export default About;