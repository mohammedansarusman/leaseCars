'use client'
import React from "react";
import { AccordionMake } from "./AccordionMake";
import { AccordionPrice } from "./AccordionPrice";
import { FilterOffers } from "./FilterOffers";
import { setPriceRange, setBrands } from "@/store/carsSlice";
import { setEnabled } from "@/store/themeSlice";
import { useDispatch } from "react-redux";

export const FilterWiderScreen = () => {
  const dispatch = useDispatch();
  
  const handleClick = () =>{
    dispatch(setPriceRange([1000,20000]));
    dispatch(setBrands([]));
    dispatch(setEnabled(false))
  }
  return (
    <div className="w-full rounded-lg hidden lg:block lg:w-[40%] xl:w-[30%] pl-3">
      <header className="flex justify-between">
        {/* filter and reset button */}
        <h1 className="font-semibold text-gray-700">Filters</h1>
        <button className="font-semibold text-sky-800 cursor-pointer" onClick={handleClick}>Reset All</button>
      </header>
      <div className="">
        {/* Accordion for Price */}
        <AccordionPrice />
        {/* Offers toggle button */}
        <FilterOffers />
        {/*  */}
        {/* Accordiaon for Car Make */}
        <AccordionMake />
      </div>
    </div>
  );
};
