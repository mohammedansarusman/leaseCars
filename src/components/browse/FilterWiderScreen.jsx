'use client'
import React from "react";
import { AccordionMake } from "./AccordionMake";
import { AccordionPrice } from "./AccordionPrice";
import { FilterOffers } from "./FilterOffers";

export const FilterWiderScreen = () => {
  return (
    <div className="w-full bg-gray-100 rounded-lg hidden lg:block lg:w-[40%]">
      <header className="flex justify-between">
        <h1 className="font-semibold text-gray-700">Filters</h1>
        <button className="font-semibold text-sky-800">Reset All</button>
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
