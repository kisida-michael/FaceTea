import React, { useEffect, useState } from "react";
import TitleShape from "./TitleShape";
import SubSection from "./SubSection";
import { supabase } from "../supabase";

const Menu = ({locationURL}) => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    try {
      fetchData().then((data) => {
      
        setMenuData(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchData = async () => {
    let locationQuery;

    console.log(locationURL);
  
    if (locationURL === "lake-mary") {
      // For lake-mary we want to query for location 1 and 3
      locationQuery = 'location.eq.1,location.eq.3';
    } else if (locationURL === "orange-city") {
      // For orange-city we want to query for location 2 and 3
      locationQuery = 'location.eq.2,location.eq.3';
    }
  
    // Ensure that the locationQuery is defined before making the query
    if (!locationQuery) {
      console.error("Invalid locationURL provided.");
      return;
    }
  
    // Use the locationQuery in the Supabase .or() function
    const { data, error } = await supabase
      .from('menu')
      .select('*')
      .or(locationQuery);
  
    if (error) {
      console.error('Error fetching data:', error);
      return;
    } else {
      const organizedData = data.reduce((acc, item) => {
        if (!acc[item.foodCategory]) acc[item.foodCategory] = {};
        if (!acc[item.foodCategory][item.category])
          acc[item.foodCategory][item.category] = [];
        acc[item.foodCategory][item.category].push(item);
        return acc;
      }, {});
      return organizedData;
    }
  };


  
  return (
    <div className="min-h-screen bg-secondary-100 flex mb-20 " id="menu">
      <div className="container mx-auto text-center">
        <div className="flex pt-20 mx-auto justify-center">
          <div className="flex flex-col">
            <TitleShape title="Menu" />
          </div>
        </div>
        <div className="container mx-auto text-center">
          {menuData &&
            Object.keys(menuData).map((foodCategory) => (
              <SubSection
                key={foodCategory}
                title={foodCategory}
                categories={menuData[foodCategory]}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
