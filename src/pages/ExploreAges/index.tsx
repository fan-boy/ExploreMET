import React from "react";
import Timeline from "./timeline";

const ExploreAges = () =>{

    return(
        <div className="flex flex-col w-full">
        <div className="w-full flex flex-col gap-10 px-20 mt-20">
      <span className="text-4xl font-serif w-full text-left ">
        Explore the Ages
      </span>
      
        </div>

        <Timeline />


      </div>
    );


}

export default ExploreAges;