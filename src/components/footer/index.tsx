import { EnvelopeSimple } from "@phosphor-icons/react";
import React from "react";


interface NavbarProps {

}

const Footer = () => {

    return (

        <div className="w-full flex p-20 items-center justify-center gap-20 flex-col font-navbar  bg-bgcolorDark text-fontColorDark">


            <div className="flex gap-5 items-center justify-center flex-col">
                <span className=" not-italic text-md md:text-2xl">
                    Let&#x27;s connect
                </span>
                <div className="flex flex-row gap-5">
                    <span className="hover:cursor-pointer">
                        <a href="mailto:aadityashete@outlook.com" target="_blank">
                            <svg className="hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f5f5f5" viewBox="0 0 256 256"><path d="M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50ZM208.58,62,128,135.86,47.42,62ZM216,194H40a2,2,0,0,1-2-2V69.64l86,78.78a6,6,0,0,0,8.1,0L218,69.64V192A2,2,0,0,1,216,194Z"></path></svg>
                        </a>
                    </span>
                    <span className="hover:cursor-pointer">
                        <a href="https://www.linkedin.com/in/aadityashete/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f5f5f5" viewBox="0 0 256 256"><path d="M216,26H40A14,14,0,0,0,26,40V216a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V40A14,14,0,0,0,216,26Zm2,190a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM94,112v64a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm88,28v36a6,6,0,0,1-12,0V140a22,22,0,0,0-44,0v36a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0v2.11A34,34,0,0,1,182,140ZM98,84A10,10,0,1,1,88,74,10,10,0,0,1,98,84Z"></path></svg>
                        </a>
                    </span>
                    <span className="hover:cursor-pointer">
                        <a href="https://medium.com/@aadityashete" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f5f5f5" viewBox="0 0 256 256"><path d="M72,66a62,62,0,1,0,62,62A62.07,62.07,0,0,0,72,66Zm0,112a50,50,0,1,1,50-50A50.06,50.06,0,0,1,72,178ZM184,66c-17.1,0-30,26.65-30,62s12.9,62,30,62,30-26.65,30-62S201.1,66,184,66Zm0,112c-7.34,0-18-19.48-18-50s10.66-50,18-50,18,19.48,18,50S191.34,178,184,178ZM246,72V184a6,6,0,0,1-12,0V72a6,6,0,0,1,12,0Z"></path></svg>
                        </a>
                    </span>
                    <span className="hover:cursor-pointer">
                        <a href="https://github.com/fan-boy" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f5f5f5" viewBox="0 0 256 256"><path d="M203.94,76.16A55.73,55.73,0,0,0,199.46,30,4,4,0,0,0,196,28a55.78,55.78,0,0,0-46,24H122A55.78,55.78,0,0,0,76,28a4,4,0,0,0-3.46,2,55.73,55.73,0,0,0-4.48,46.16A53.78,53.78,0,0,0,60,104v8a52.06,52.06,0,0,0,52,52h1.41A36,36,0,0,0,100,192v12H72a28,28,0,0,1-28-28A36,36,0,0,0,8,140a4,4,0,0,0,0,8,28,28,0,0,1,28,28,36,36,0,0,0,36,36h28v20a4,4,0,0,0,8,0V192a28,28,0,0,1,56,0v40a4,4,0,0,0,8,0V192a36,36,0,0,0-13.41-28H160a52.06,52.06,0,0,0,52-52v-8A53.78,53.78,0,0,0,203.94,76.16ZM204,112a44.05,44.05,0,0,1-44,44H112a44.05,44.05,0,0,1-44-44v-8a45.76,45.76,0,0,1,7.71-24.89,4,4,0,0,0,.53-3.84,47.82,47.82,0,0,1,2.1-39.21,47.8,47.8,0,0,1,38.12,22.1A4,4,0,0,0,119.83,60h32.34a4,4,0,0,0,3.37-1.84,47.8,47.8,0,0,1,38.12-22.1,47.82,47.82,0,0,1,2.1,39.21,4,4,0,0,0,.53,3.83A45.85,45.85,0,0,1,204,104Z"></path></svg>
                        </a></span>
                </div>

            </div>
            <div className="w-full flex flex-col gap-5">
            <div className="gap-5 flex flex-col md:flex-row  items-center justify-center">
                <span className=" md:text-lg text-md">
                    © 2024
                </span>
                <span className=" md:text-lg text-md">
                    Designed and {'<>'} by Aaditya Shete 
                </span>
            </div>
            </div>

        </div>

    );

}

export default Footer;