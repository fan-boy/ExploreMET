import React, { useEffect, useState } from "react";
import InputField from "../Input";



interface SearchBarProps{
    onSearch: (searchValue:string)=>void;
    onChangeShowOnlyImages: (searchValue:string, showOnlyImages:boolean)=>void;
    onChangeShowOnView:(showIsOnView:boolean) => void
    isSearch: boolean
}

const SearchBar = (props:SearchBarProps)=>{

    const [searchValue, setSearchValue] = useState('');
    const [showOnlyImages, setShowOnlyImages] = useState(false);
    const [showIsOnView, setIsOnView] = useState(false);

    useEffect(() =>{

        props.onChangeShowOnlyImages(searchValue,showOnlyImages)

    },[showOnlyImages])

    useEffect(() =>{

        props.onChangeShowOnView(showIsOnView)

    },[showIsOnView])

    const onChangeSearchValue = (e: string | boolean | string[])=>{
        if(typeof e === 'string' ) setSearchValue(e);
    }

    const onChangeShowOnlyImages = (e: string | boolean | string[])=>{
        if(typeof e === 'boolean' ) setShowOnlyImages(e);
    }
    const onChangeOnView = (e: string | boolean | string[])=>{
        if(typeof e === 'boolean' ) setIsOnView(e);
    }

    const onClickSearch = () =>{
        props.onSearch(searchValue)
    }
    
    return(
        <div className="w-full flex flex-col">
        <div className="w-full flex flex-row">
            <InputField style={"border-2 border-gray-800 dark:border-white rounded-s-md py-2 px-2"} type="text" onChange={onChangeSearchValue} value={searchValue} placeholder="Enter Search Term" /> 
            <button className=" py-2 px-2 border-gray-800 border-t-2 border-b-2 border-r-2 dark:border-white hover:bg-gray-800 hover:text-white rounded-e-md" onClick={onClickSearch}>
                Search
            </button>

        </div>
        {props.isSearch &&
        <div className="w-full mt-4 flex flex-row gap-4 items-left text-left">
            <InputField style={"w-4 h-4"} type="checkbox" label="Artwork with image" onChange={onChangeShowOnlyImages} value={showOnlyImages} placeholder="Enter Search Term" /> 
            <InputField style={"w-4 h-4"} type="checkbox" label="Is on view" onChange={onChangeOnView} value={showIsOnView}  /> 
        </div>   
        }
        </div>
    );



}

export default SearchBar