import React from 'react'
import titleSVG from '../assets/title.svg'
const TitleShape = ({ title }) => {
    return (
      <div className="relative text-center w-72">
        <img src={titleSVG} alt="Title Background" />  {/* Display the SVG */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl pb-2 font-bold text-white font-roboto-slab">{title}</h1>
        </div>
      </div>
    );
  }

export default TitleShape
