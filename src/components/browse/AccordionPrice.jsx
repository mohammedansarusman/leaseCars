import React from "react";
import { PriceSlider } from "./PriceSlider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useSelector, useDispatch } from "react-redux";
import { setPriceRange } from "@/store/carsSlice";
import { useEffect } from "react";

export const AccordionPrice = () => {
  const priceRange = useSelector((store) => store.car.priceRange);
  const dispatch = useDispatch();
  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      priceRange[0]<1000 && dispatch(setPriceRange([1000, priceRange[1]]));
      (priceRange[1]>20000 || priceRange[1]<priceRange[0]) && dispatch(setPriceRange([priceRange[0], 20000]));  

    },1000)
    return ()=>{
      clearTimeout(timeOut);
    }
  },[priceRange])

  const handlePriceChange = (e) => {
    if (e.target.name === "min-price") {
      const rawValue = e.target.value.replace(/[^0-9]/g, "")
        dispatch(setPriceRange([Number(rawValue), priceRange[1]]));
    }
    if (e.target.name === "max-price") {
      const rawValue = e.target.value.replace(/[^0-9]/g, "")
      dispatch(setPriceRange([priceRange[0], Number(rawValue)]));
    }
  };
  return (
    <>
      <Accordion
        type="single"
        defaultValue="item-1"
        collapsible
        className="w-full"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="px-5 hover:no-underline text-base font-semibold text-gray-700">{`Price (AED)`}</AccordionTrigger>
          <AccordionContent>
            <div className="w-full">
              {/* input min price and max price */}
              <section className="w-full flex gap-2 py-2 px-2">
                <input
                  type="text"
                  name="min-price"
                  inputMode="numeric"
                  value={priceRange[0].toLocaleString()}
                  onChange={(e) => handlePriceChange(e)}
                  className="border-none outline-1 outline-gray-300 rounded-sm hover:outline-blue-400 h-10 focus:ring-2 focus:ring-blue-600 w-1/2 px-2"
                />
                <input
                  // type="text"
                  name="max-price"
                  value={priceRange[1].toLocaleString()}
                  onChange={(e) => handlePriceChange(e)}
                  className="border-none outline-1 outline-gray-300 rounded-sm hover:outline-blue-400 h-10 focus:ring-2 focus:ring-blue-600 w-1/2 px-2"
                />
              </section>
              {/* Price Slider  -  Minimum and Maximum price slider */}
              <PriceSlider />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
