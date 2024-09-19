import React, { useState } from "react";
import InputField from "../Input";



interface SearchBarProps{
    onSearch: ()=>void;
}

const SearchBar = ()=>{

    const [searchValue, setSearchValue] = useState('');

    const onChangeSearchValue = (e: React.FormEvent<HTMLInputElement>)=>{
        e.preventDefault();

        // if(e.currentTarget.value ){
            setSearchValue(e.currentTarget.value);
    
    }
    
    return(
        <div className="w-full flex flex-row">
            <InputField style={"border-2 border-gray-800 dark:border-white rounded-s-md py-2 px-2 w-5/6"} type="text" onChange={onChangeSearchValue} value={searchValue} placeholder="Enter Search Term" /> 
            <button className="w-1/6 py-2 px-2 border-gray-800 border-t-2 border-b-2 border-r-2 dark:border-white hover:bg-gray-800 hover:text-white rounded-e-md">
                Search
            </button>
        </div>
    );



}

export default SearchBar