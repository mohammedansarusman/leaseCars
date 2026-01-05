"use client";
import React, { useState } from "react";

export const AccordionFeature = ({ item }) => {
  const [display, setDisplay] = useState(false);
  const handleClick = () =>{
    setDisplay((prev)=>!prev)
  }
  return (
    <div className="">
      {/* heading and +/- sign for accordion  */}
      <div className="flex items-center justify-between mt-10">
        <h1 className="text-md opacity-80">{item.feature_group_name}</h1>
        <div className="border border-black rounded-full w-5 h-5 
        flex items-center justify-center cursor-pointer transition-all duration-700 delay-1000"
        onClick = {handleClick}    
        >
          {display ? '-' : '+'}
          
        </div>
      </div>
      {/* Accordion content  */}
      {display && (
        <div className="flex flex-wrap gap-2 mt-2">
          {item.feature_group_items.map((things) => (
            <h1
              key={things.id}
              className="text-sm bg-gray-300 px-3 py-1 rounded-full"
            >
              {things.name}
            </h1>
          ))}
        </div>
      )}
      <div className="w-full h-px bg-gray-300 mt-5"></div>
    </div>
  );
};
