import React, {useState, useEffect} from "react";
import headerbg from "../assets/headerbg.png";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import arrows from "../assets/arrows.svg";  

const Header = ({locationURL}) => {

  const [location, setLocation] = useState("");
  useEffect(() => {
    if (locationURL === "lake-mary") {
      setLocation("Lake Mary");
    } else if (locationURL === "orange-city") {
      setLocation("Orange City");
    }
  }, [locationURL]); // Only re-run the effect if locationURL changes
  
  return (
    <header className="bg-header-bg h-screen font-roboto bg-cover bg-no-repeat bg-center flex flex-col text-white w-full">
    
      <div className=" flex h-full">
      <img src={arrows} alt="Arrows" className="absolute h-12 bottom-8 left-8" />  
        <div className="mx-auto text-center flex flex-col space-y-6 justify-center">
        {location === 'Orange City' ? (
            <h1 className="font-roboto-slab font-semibold text-8xl">Face Tea & Poke Bowl</h1>
          ) : (
            <h1 className="font-roboto-slab font-semibold text-8xl">Face Tea</h1>
          )}
          <h2 className="font-roboto-slab font-medium text-5xl">{location}</h2>
          <h3 className="font-light text-4xl">Life Begins After Tea</h3>
          <a href="#menu"className="p-2 px-6 border-2 border-white mx-auto hover:bg-white hover:text-black ">
            View Menu
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
