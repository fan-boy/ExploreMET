import React from "react";
import HomePageCard from "../../components/Cards/homePageCard";

const Homepage = () =>{

    return(
        <div className="flex relative flex-col p-20 w-full">
        <span className="text-4xl font-serif">
          Explore the MET Art Collection
        </span>
        

        <div className="h-96 grid grid-cols-2 justify-items-center my-20 p-10  gap-20">
        <HomePageCard type="ByAges"/>
        <HomePageCard type="ExploreAll"/>


        </div>
       

      </div>
    );


}

export default Homepage;