import React, {useEffect, useState} from "react";
import TitleShape from "./TitleShape";
import SubSection from "./SubSection";
import { supabase } from "../supabase"

const Menu = () => {

    const [menuData, setMenuData] = useState(null);


    useEffect(() => {

        try {

            fetchData().then((data) => {
                console.log(data);
                setMenuData(data);
            });

        }

        catch (error) {
            console.log(error);
        }

    }, []);

    const fetchData = async () => {
        const { data, error } = await supabase.from('menu').select('*');
        if (error) console.error(error);
        else {
          const organizedData = data.reduce((acc, item) => {
            if (!acc[item.foodCategory]) acc[item.foodCategory] = {};
            if (!acc[item.foodCategory][item.category]) acc[item.foodCategory][item.category] = [];
            acc[item.foodCategory][item.category].push(item);
            return acc;
          }, {});
          return organizedData;
        }
      };
      
  return (
    <div className="min-h-screen bg-secondary-100 flex " id="menu">
      <div className="container mx-auto text-center">
        <div className="flex pt-20 mx-auto justify-center">
          <div className="flex flex-col">
            <TitleShape title="Menu" />
          </div>
        </div>
        <div className="container mx-auto text-center">
        {menuData && Object.keys(menuData).map(foodCategory => (
          <SubSection key={foodCategory} title={foodCategory} categories={menuData[foodCategory]} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Menu;
