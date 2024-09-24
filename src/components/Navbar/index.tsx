import React from "react";
import { Button } from "../Button/Button";
import { ButtonOrLink } from "../Button/LinkOrButton";
import PacerLogo from "./PacerLogo 1.png";


const Navbar =()=>{
    return(
        <div className="w-full bg-bgcolorDark dark:bgcolorLight text-fontColorDark font-navbar dark:text-fontColorLight flex justify-center">

            <div className="w-full  p-2   items-center flex justify-between  ">
            <div className=" flex flex-row gap-2 items-center">
            <ButtonOrLink className="hidden sm:block font-regular ml-4" href="https://aadityashete.me">
            <span>
                Aaditya Shete
            </span>
            </ButtonOrLink>
            <span>
                {"<>"}
            </span>
            <span>
                <img src={PacerLogo}  className=" h-4"/>
            </span>
            
            </div>
            <div className="  flex  justify-center sm:items-right justify-right">
                <Button intent={"primary"} onClick={()=>window.open("https://github.com/fan-boy/ExploreMET")}>
               
                   <span className="flex flex-row gap-2 items-center">
                   View Code
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f5f5f5" viewBox="0 0 256 256"><path d="M203.94,76.16A55.73,55.73,0,0,0,199.46,30,4,4,0,0,0,196,28a55.78,55.78,0,0,0-46,24H122A55.78,55.78,0,0,0,76,28a4,4,0,0,0-3.46,2,55.73,55.73,0,0,0-4.48,46.16A53.78,53.78,0,0,0,60,104v8a52.06,52.06,0,0,0,52,52h1.41A36,36,0,0,0,100,192v12H72a28,28,0,0,1-28-28A36,36,0,0,0,8,140a4,4,0,0,0,0,8,28,28,0,0,1,28,28,36,36,0,0,0,36,36h28v20a4,4,0,0,0,8,0V192a28,28,0,0,1,56,0v40a4,4,0,0,0,8,0V192a36,36,0,0,0-13.41-28H160a52.06,52.06,0,0,0,52-52v-8A53.78,53.78,0,0,0,203.94,76.16ZM204,112a44.05,44.05,0,0,1-44,44H112a44.05,44.05,0,0,1-44-44v-8a45.76,45.76,0,0,1,7.71-24.89,4,4,0,0,0,.53-3.84,47.82,47.82,0,0,1,2.1-39.21,47.8,47.8,0,0,1,38.12,22.1A4,4,0,0,0,119.83,60h32.34a4,4,0,0,0,3.37-1.84,47.8,47.8,0,0,1,38.12-22.1,47.82,47.82,0,0,1,2.1,39.21,4,4,0,0,0,.53,3.83A45.85,45.85,0,0,1,204,104Z"></path></svg>
                    </span>  
                </Button>

            <span className="flex  flex-row gap-2 ">
           
           </span>
           </div>
           </div>
        </div>
    );
}

export default Navbar;