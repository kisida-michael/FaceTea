import React from "react";
import headerbg from "../assets/headerbg.png";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import arrows from "../assets/arrows.svg";  // Import the SVG file as a regular module

const Header = () => {
  return (
    <header className="bg-header-bg h-screen font-roboto bg-cover bg-no-repeat bg-center flex flex-col text-white">
      <Navbar />
        {/* <Navbar2 /> */}
      <div className=" flex h-full">
      <img src={arrows} alt="Arrows" className="absolute h-12 bottom-8 left-8" />  {/* Use the img element to display the SVG */}
        <div className="mx-auto text-center flex flex-col space-y-8 justify-center">
          <h1 className="font-roboto-slab font-semibold text-8xl">Face Tea</h1>
          <h2 className="font-light text-4xl">Life Begins After Tea</h2>
          <a href="#menu"className="p-2 px-6 border-2 border-white mx-auto hover:bg-white hover:text-black ">
            View Menu
          </a>
        </div>
{/* 
        <div className="container mx-auto">
            <h1>test</h1>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
