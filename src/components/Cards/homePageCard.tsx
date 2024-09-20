import React, { useState } from "react";
import { GetObject } from "../../Handlers/models";
import Lottie from 'react-lottie';
import ByAges from '../../pages/homepage/ByAges.png';
import ExploreAll from '../../pages/homepage/ExploreAll.png';
import { useNavigate } from 'react-router-dom';

import ByAgesAnimation from '../../pages/homepage/lotties/ExploreAges.json';
import ExploreAllAnimation from '../../pages/homepage/lotties/ExploreAll.json';

 


interface HomePageCardProps{
    type:string
}



const HomePageCard = (props:HomePageCardProps) =>{

    const[isHovering, setIsHovering] = useState(false);
    const navigate = useNavigate();

    let animationData=ByAgesAnimation;
    let cardText = "";
    let link = "";
    let image = ByAges;

    switch(props.type){
        case "ByAges":
            animationData=ByAgesAnimation;
            cardText = "By Ages";
            link = "/ages";
            image = ByAges;
            break;
        case "ExploreAll":
            animationData=ExploreAllAnimation;
            cardText = "Explore All";
            link = "/explore";
            image = ExploreAll;
            break;
            
    }

    const defaultOptions = {
        loop:false, 
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };


      const onCardClick = () =>{
        navigate(link);
      }

    return(
        <div className="w-2/3  text-2xl hover:text-5xl relative flex flex-col items-start text-left" onMouseEnter={() =>setIsHovering(true)} onMouseLeave={() =>setIsHovering(false)} onClick={onCardClick}>
      {/* Image section */}
      <div className="w-full overflow-hidden bg-gray-200"> 
        
          {!isHovering &&<img
            src={image}
            alt={cardText}
            className="w-full h-full object-contain rounded-sm" 
          />}
          {isHovering && <Lottie 
	    options={defaultOptions}
       
      />}
        
      </div>

      {/* Text section */}
      <div className="w-full absolute top-96 flex flex-col  text-center mt-2 mb-10">
        <span className="font-serif">{cardText}</span>
        
      </div>
    </div>
    );


}

export default HomePageCard;