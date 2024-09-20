import React from "react";
import { GetObject } from "../../Handlers/models";


interface ObjectCardProps{

    object:GetObject

}

const ObjectCard = (props:ObjectCardProps) =>{

    return(
        <div className="w-full flex flex-col items-start text-left">
      {/* Image section */}
      <div className="w-full h-64 overflow-hidden bg-gray-200"> 
        {props.object.primaryImageSmall !== "" ? (
          <img
            src={props.object.primaryImageSmall}
            alt={props.object.title}
            className="w-full h-full object-contain rounded-sm" 
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <span className="font-sans text-gray-700 rounded-sm">Image not available</span>
          </div>
        )}
      </div>

      {/* Text section */}
      <div className="w-full flex flex-col items-start text-left mt-2 mb-10">
        <span className="text-2xl font-serif">{props.object.title}</span>
        <span className="text-lg font sans">{props.object.artistDisplayName}</span>
        <span className="text-lg font sans">{props.object.objectDate}</span>
        
      </div>
    </div>
    );


}

export default ObjectCard;