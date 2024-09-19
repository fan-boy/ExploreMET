import React, { useEffect, useState } from "react";
import ObjectCard from "../../components/Cards/objectCard";

import SearchBar from "../../components/input/Searchbar";
import Pagination from "../../components/Pagination";
import { GetObject } from "../../Handlers/models";
import { SearchHandler } from "../../Handlers/SearchHandler/SearchHandler";
import { WebResponseStatus } from "../../Handlers/WebResponseStatus";

const ExploreAll = () =>{

  const [searchterm, setSearchTerm] = useState("");
  const [pageSize, setPageSize] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentObjects, setCurrentObjects] = useState<GetObject[]>([]);

  useEffect(()=>{
    //Will run twice in development due to react strict mode
    (async()=>{
      let [status, totalNumber, objects] = await SearchHandler.getAllContent(pageSize,currentPage);
      if(status === WebResponseStatus.OK){
        let totalNumberofPages = Math.ceil(totalNumber/pageSize);
        let currentObjects:GetObject[] = objects;
        setCurrentObjects(currentObjects);
        setTotalPages(totalNumberofPages);
      }
    })();
  },[])

  useEffect(()=>{
    (async()=>{
      let [status, totalNumber, objects] = await SearchHandler.getAllContent(pageSize,currentPage);
      if(status === WebResponseStatus.OK){
        let currentObjects:GetObject[] = objects;
        setCurrentObjects(currentObjects);
      }

    })();

  },[currentPage])

  const onPageChange =(page:number)=>{
    
    setCurrentPage(page);

  }

    return(
        <div className="flex flex-col gap-4 w-full text-center">
        <span className="text-6xl font-serif w-full text-center mt-14">
          Explore All
        </span>
        <span className="text-xl font-sans">
          Explore the MET Art collection
        </span>

        <div className="mt-20 gap-20 flex flex-col items-center"> 

        <div className="w-1/2">

        <SearchBar/>

        </div>

         <div className="w-full p-20 grid grid-cols-3 gap-x-10 gap-y-20">

         {currentObjects?.map((i) => (
    <ObjectCard key={i.objectID} object={i} />
  ))}

          
        
        
        </div> 

        <span className="mb-20">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange}/>
        </span>
        </div>

      </div>
    );


}

export default ExploreAll;