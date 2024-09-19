import React from "react";
import { ButtonOrLink } from "../Button/LinkOrButton";


const Navbar =()=>{
    return(
        <div className="w-full bg-bgcolorDark dark:bgcolorLight text-fontColorDark font-navbar dark:text-fontColorLight flex justify-center">

            <div className="w-full  p-2   items-center flex justify-between  ">

            <ButtonOrLink className="hidden sm:block font-regular ml-4" href="/">
            <span>
                Aaditya Shete
            </span>
            </ButtonOrLink>

            <div className=" w-full sm:w-min flex  justify-center sm:items-right justify-right">

            <span className="flex  flex-row gap-2 ">
           
           </span>
           </div>
           </div>
        </div>
    );
}

export default Navbar;