import React, { useEffect, useState } from "react";
import ObjectCard from "../../components/Cards/objectCard";

import SearchBar from "../../components/input/Searchbar";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import { GetObject } from "../../Handlers/models";
import { SearchHandler } from "../../Handlers/SearchHandler/SearchHandler";
import { WebResponseStatus } from "../../Handlers/WebResponseStatus";

const ExploreAll = () => {

  const [searchterm, setSearchTerm] = useState("");
  const [showImageswithArtwork, setshowImageswithArtwork] = useState(false);
  const [showOnViewArtwork, setShowOnViewArtwork] = useState(false);
  const [pageSize, setPageSize] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentObjects, setCurrentObjects] = useState<GetObject[]>([]);
  const [currentObjectIds, setCurrentObjectIds] = useState<number[]>([])
  const [everythingLoading, seteverythingLoading] = useState(true);
  const [isSearch, setIsSearch] = useState(false);

  const [isError, setIsError] = useState(false);

  const fetchContent = async () => {
    seteverythingLoading(true);
    try {
      const [status, totalNumber, objects, objectIDs] = await SearchHandler.getAllContent(pageSize, currentPage, currentObjectIds);
      if (status === WebResponseStatus.OK) {
        const totalNumberofPages = Math.ceil(totalNumber / pageSize);
        setCurrentObjectIds(objectIDs);
        setCurrentObjects(objects);
        setTotalPages(totalNumberofPages);
      } else {
        console.error("Failed to fetch content:", status);
        setIsError(true);
      }
    } catch (error) {
      console.error("Error fetching content:", error);
      setIsError(true);
    } finally {
      seteverythingLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, [])

  useEffect(() => {
    if (searchterm && searchterm !== "") {
      fetchSearchResults(currentObjectIds)
    } else {
      fetchContent();
    }
  }, [currentPage])

  const fetchSearchResults = async (objectIDs: number[]) => {
    seteverythingLoading(true);
    try {

      const [status, totalNumber, objects, objectIDsret] = await SearchHandler.searchContent(pageSize, currentPage, searchterm, showImageswithArtwork, showOnViewArtwork, objectIDs);
      if (status === WebResponseStatus.OK) {
        const totalNumberofPages = Math.ceil(totalNumber / pageSize);
        setCurrentObjects(objects);
        setTotalPages(totalNumberofPages);
        setCurrentObjectIds(objectIDsret);
      } else {
        console.error("Failed to fetch search results:", status);
        setIsError(true);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      setIsError(true);
    } finally {
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

  }, [searchterm, showImageswithArtwork, showOnViewArtwork])

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  }
  const onChangeShowImageswithArtwork = (searchValue: string, showOnlyImages: boolean) => {
    setshowImageswithArtwork(showOnlyImages);
  }

  const onChangeShowOnView = (showIsOnView: boolean) => {
    setShowOnViewArtwork(showIsOnView);
  }
  const onSearch = (searchValue: string) => {
    setSearchTerm(searchValue)
    seteverythingLoading(true);
  }



  return (
    <div className="flex flex-col gap-4 w-full text-center">
      <div className="w-full flex flex-col gap-10 px-20 mt-20">
      <span className="text-4xl font-serif w-full text-left ">
        Explore All
      </span>
      <div className="w-2/3">

          <SearchBar onSearch={onSearch} isSearchLoading={everythingLoading} isSearch={isSearch} onChangeShowOnlyImages={onChangeShowImageswithArtwork} onChangeShowOnView={onChangeShowOnView} />

        </div>
        </div>

      <div className="mt-10 gap-20 flex flex-col items-left ">

        {everythingLoading && !isError && <Loading/>}

        {!everythingLoading && !isError && <div className="w-full p-20">

          <div className="w-full  grid grid-cols-3 gap-x-10 gap-y-20">

            {currentObjects?.map((i) => (
              <ObjectCard key={i.objectID} object={i} />
            ))}
          </div>

          <span className="mb-20">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
          </span>
        </div>}
        {isError && 
        <div className="w-full text-center font-serif text-2xl">
            Some Error Occured. Please refresh the page
        </div>}
      </div>
    </div>
  );
}

export default ExploreAll;