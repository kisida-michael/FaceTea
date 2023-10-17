import React, { useState, useEffect, useRef } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import { animated, useSpring } from 'react-spring';

import sampleImg from "../assets/sample.jpg";
const SubSection = ({ title, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("Drinks");
  const contentRef = useRef(null);

  useEffect(() => {
    if (categories && Object.keys(categories).length > 0) {
      setSelectedCategory(Object.keys(categories)[0]);
    }
  }, [categories]);

  const props = useSpring({
    from: { height: '0px' },
    to: async (next, cancel) => {
      if (contentRef.current) {
        contentRef.current.style.height = 'auto';
        const fullHeight = contentRef.current.scrollHeight + 'px';
        contentRef.current.style.height = '0px';
        await next({ height: fullHeight });
      }
    },
    config: { tension: 150, friction: 20 },
  });
  if (!categories || Object.keys(categories).length === 0) {
    return null; 
  }

  return (
      <div className="">
        <div className="flex items-center space-x-4">
          <h2 className="ml-4 sm:ml-0  mt-4 sm:mt-0 text-primary font-semibold text-4xl">{title}</h2>
        </div>
        <div className="flex flex-col md:flex-row md:h-min-max">
          <div className="md:w-1/4 md:h-max md:mx-0  mx-4 flex flex-col bg-secondary-200 mt-4">
            {Object.keys(categories).map((category) => (
              <div className="mx-2">
                <button
                  className={`text-secondary-900 w-full text-[1.25rem] font-semibold font-roboto my-2 text-left p-2 ${
                    selectedCategory === category ? "bg-primary text-white" : ""
                  } hover:bg-primary transition-all`}
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              </div>
            ))}
          </div>
          <animated.div ref={contentRef} style={props}   className="flex-1 bg-secondary-200  md:ml-10 mt-4 md:mx-0  mx-4 overflow-hidden">

              {categories[selectedCategory] ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                  {categories[selectedCategory].map((item) => (
                    <div
                      key={item.id}
                      className="flex my-2 mx-8 py-4 px-4   bg-secondary-300 flex-row text-left"
                    >
                      <img src={sampleImg} alt="Sample" className="h-20 w-20" />
                      <div className="flex flex-col justify-between ml-4">
                        <div>
                          <h3 className="text-secondary-900 font-roboto-slab text-xl text-medium">
                            {item.name}
                          </h3>
                          <p className="text-secondary-900 font-roboto ">
                            {item.chineseName} 
                          </p>
                          <p className="text-secondary-900 font-roboto ">
                            {item.description}
                          </p>
                        </div>
                       
                          {item.price && <p className="bg-primary w-min px-2 py-1">${item.price}</p>}
                        
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No items found for selected category.</p>
              )}
            </animated.div>
        </div>
      </div>
  );
};
export default SubSection;
