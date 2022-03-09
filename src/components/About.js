import React, { useState } from 'react';

import { ChevronUp, ChevronDown } from 'react-feather'
const About = () => {

    const [show, setShow] = useState({
        vision: false,
        mission: false,
        experience: false,
        value: false
    });

    return (
        <>
            <div className='bg-gray-300'>
                <div>
                    <ul>
                        <li>Vision  {show.vision ? (<ChevronUp onClick={() => setShow({ ...show, vision: !show.vision })} />) :
                         (<ChevronDown onClick={() => setShow({ ...show, vision: !show.vision })} />)} 
                         </li>
            {show.vision && <p>to become a world class engineer who will design and develop world class solutions </p>}

                        <li>Mission  {show.mission ? (<ChevronUp onClick={() => setShow({ ...show, mission: !show.mission })} />) :
                         (<ChevronDown onClick={()=>setShow({...show ,mission:!show.mission})} />)}
                         </li>
            {show && <p>to build engineering skills ,innovate and identify different problem across the world
                         to find their solutions using engineering skills</p>}


                         <li>Experience  {show.experience ? (<ChevronUp onClick={() => setShow({ ...show, experience: !show.experience })} />) :
                         (<ChevronDown onClick={()=>setShow({...show ,experience:!show.experience})} />)}
                         </li>
                         {show&& <p> background in Rwanda Coding with skills in different programming languages</p> }
                         <li>Values  {show.values ? (<ChevronUp onClick={() => setShow({ ...show, values: !show.values })} />) :
                         (<ChevronDown onClick={()=>setShow({...show ,values:!show.values})} />)}
                         </li>
                         {show&& <p> a Rwandan who was born to code development my hobby</p> }

                       
                    </ul>
                </div>

                <div>


                </div>

            </div>

        </>
    );

}

export default About;