import React from "react";
import HomePageCard from "../../components/Cards/homePageCard";

const Homepage = () =>{

    return(
        <div className="flex flex-col p-20 w-full">
        <span className="text-4xl font-serif">
          Explore the MET Art Collection
        </span>
        

        <div className="grid grid-cols-2 mt-20 gap-20">
        <HomePageCard />
        <HomePageCard />


        </div>

      </div>
    );


}

export default Homepage;