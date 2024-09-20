import React, { useEffect, useState } from "react";
import ObjectCard from "../../../components/Cards/objectCard";

import SearchBar from "../../../components/input/Searchbar";
import Pagination from "../../../components/Pagination";
import { GetObject } from "../../../Handlers/models";
import { SearchHandler } from "../../../Handlers/SearchHandler/SearchHandler";
import { WebResponseStatus } from "../../../Handlers/WebResponseStatus";
import { useParams } from 'react-router-dom';
import Loading from "../../../components/Loading";

const ExploreAge = () => {

    
  const { age } = useParams<{ age: string }>();
  const [searchterm, setSearchTerm] = useState(age?age:"");
  const [pageSize, setPageSize] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentObjects, setCurrentObjects] = useState<GetObject[]>([]);
  const [currentObjectIds, setCurrentObjectIds] = useState<number[]>([])
  const [everythingLoading, seteverythingLoading] = useState(true);
  const [contentLoading, setContentLoading] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const [isError, setIsError] = useState(false);

  useEffect(()=>{
    if (searchterm && searchterm !== "") {
        fetchSearchResults(currentObjectIds)
      } 
  },[])

  

  useEffect(() => {
    if (searchterm && searchterm !== "") {
      fetchSearchResults(currentObjectIds)
    } 
  }, [currentPage])

  const fetchSearchResults = async (objectIDs: number[]) => {
    seteverythingLoading(true);
    try {

      const [status, totalNumber, objects, objectIDsret] = await SearchHandler.searchContent(pageSize, currentPage, searchterm, false, false, objectIDs);
      if (status === WebResponseStatus.OK) {
        const totalNumberofPages = Math.ceil(totalNumber / pageSize);
        setCurrentObjects(objects);
        setTotalPages(totalNumberofPages);
        setCurrentObjectIds(objectIDsret);
      } else {
        console.error("Failed to fetch search results:", status);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setContentLoading(false);
      seteverythingLoading(false);
    }
  };

  useEffect(() => {
    if (searchterm) {
      fetchSearchResults([]);
      setCurrentPage(1);
    }
    setIsSearch(true);
    if (searchterm == "") {
      setIsSearch(false);
    }

  }, [searchterm])

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    setContentLoading(true);
  }
  


  return (
    <div className="flex flex-col gap-4 w-full text-center">
      <div className="w-full flex flex-col gap-10 px-20 mt-20">
      <span className="text-4xl font-serif w-full text-left ">
        Explore {age}
      </span>
        </div>

      <div className="mt-10 gap-20 flex flex-col items-left ">

        

        {everythingLoading && <Loading/>}

        {!everythingLoading && !contentLoading && <div className="w-full p-20">

          <div className="w-full  grid grid-cols-3 gap-x-10 gap-y-20">

            {currentObjects?.map((i) => (
              <ObjectCard key={i.objectID} object={i} />
            ))}




          </div>

          <span className="mb-20">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
          </span>
        </div>}
      </div>
    </div>
  );


}

export default ExploreAge;