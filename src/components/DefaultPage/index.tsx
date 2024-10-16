import PropTypes from "prop-types";
import React from "react";
import Navbar from "../Navbar";
import Footer from "../footer";


const DefaultPage =({
    children,
  }: {
    children: React.ReactNode,
  })=>{

    return(
        <>
            <Navbar/>
            <main className="flex w-full flex-col bg-bgcolorLight dark:bg-bgColorDark text-fontColorLight dark:text-fontColorDark min-h-screen ">
              <div className="w-full lg:max-w-8xl flex flex-col text-md md:text-lg pb-20 ">
                {children}
                </div>
            </main>
            <Footer/>
        </>
    )



}

export default  DefaultPage;