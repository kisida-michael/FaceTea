import React, { useState, useEffect, useRef } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import { animated, useSpring } from "react-spring";

import sampleImg from "../assets/sample.jpg";
const SubSection = ({ title, categories, locationURL }) => {
  console.log(locationURL)
  const [selectedCategory, setSelectedCategory] = useState("Drinks");
  const contentRef = useRef(null);

  useEffect(() => {
    if (categories && Object.keys(categories).length > 0) {
      setSelectedCategory(Object.keys(categories)[0]);
    }
  }, [categories]);


  if (!categories || Object.keys(categories).length === 0) {
    return null;
  }

  const getOrderLink = () => {
    switch (locationURL) {
      case "lake-mary":

        return "https://www.clover.com/online-ordering/face-tea-lake-mary";
      case "orange-city":
        return "https://www.clover.com/online-ordering/face-tea-orange-city";
      default:
        return "https://www.clover.com/online-ordering/face-tea-lake-mary"; // Default link or some other fallback
    }
  };

  return (
    <div className="">
      <div className="flex items-center space-x-4">
        <h2 className="ml-4 sm:ml-0  mt-4 sm:mt-4 text-primary uppercase font-roboto font-semibold text-4xl">
          {title}
        </h2>
        {locationURL && (
          <a 
            className="border-primary border-2 text-secondary-900 font-roboto font-semibold p-2 mt-4 hover:bg-primary hover:text-white"
            href={getOrderLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Now
          </a>
        )}
      </div>
      <div className="flex flex-col md:flex-row md:h-min-max">
        <div className="md:w-1/4 md:h-max md:mx-0  mx-4 flex flex-col border-2 border-secondary-300 mt-4 p-2">
          {Object.keys(categories).map((category) => (
            <div className="mx-2">
              <button
                className={`text-secondary-900 w-full text-[1.25rem] font-semibold font-roboto my-2 text-left p-2 ${
                  selectedCategory === category ? "bg-primary text-white" : "bg-[#f5eedd]"
                } hover:bg-primary hover:text-white transition-all`}
                key={category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </div>
          ))}
        </div>
        <div
  
          className="flex-1 border-2  md:ml-10 mt-4 md:mx-0  mx-4 overflow-hidden"
        >
          {categories[selectedCategory] ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              {categories[selectedCategory].map((item) => (
                <div
                  key={item.id}
                  className={`flex my-2 mx-8 py-4 px-4 bg-[#f5eedd] text-left ${
                    item.img_url ? "flex-row" : "flex-col"
                  }`}
                >
                  {item.img_url && (
                    <img
                      src={item.img_url}
                      alt="Sample"
                      className="h-20 w-20"
                    />
                  )}
                  <div
                    className={`flex ${
                      item.img_url ? "flex-col" : ""
                    } justify-between ml-4`}
                  >
                    <div>
                      <h3 className="text-secondary-900 font-roboto-slab text-xl text-medium">
                        {item.name}
                      </h3>
                      <p className="text-secondary-900 font-roboto">
                        {item.chineseName}
                      </p>
                      <p className="text-secondary-900 font-roboto">
                        {item.description}
                      </p>
                    </div>
                    {item.price && (
                      <p className="bg-primary h-8 w-min px-2 py-1 text-white">
                        ${item.price.toFixed(2)}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default SubSection;
