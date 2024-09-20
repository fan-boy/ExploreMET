import React, { useState } from "react";
import { GetObject } from "../../Handlers/models";
import Lottie from 'react-lottie';
import ByAges from './ByAges.png';

import ByAgesAnimation from '../../pages/homepage/lotties/ExploreAges.json';


interface HomePageCardProps{

   

}



const HomePageCard = (props:HomePageCardProps) =>{

    const[isHovering, setIsHovering] = useState(false);

    const defaultOptions = {
        loop:false, 
        autoplay: true,
        animationData: ByAgesAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return(
        <div className="w-full  relative flex flex-col items-start text-left" onMouseEnter={() =>setIsHovering(true)} onMouseLeave={() =>setIsHovering(false)}>
      {/* Image section */}
      <div className="w-full overflow-hidden bg-gray-200"> 
        
          {!isHovering &&<img
            src={ByAges}
            alt={"ByAges"}
            className="w-full h-full object-contain rounded-sm" 
          />}
          {isHovering && <Lottie 
	    options={defaultOptions}
       
      />}
        
      </div>

      {/* Text section */}
      <div className="w-full absolute -bottom-20 flex flex-col  text-center mt-2 mb-10">
        <span className="text-2xl font-serif">By Ages</span>
        
      </div>
    </div>
    );


}

export default HomePageCard;