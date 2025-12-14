import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useSelector, useDispatch } from "react-redux";
import { setPriceRange } from "@/store/carsSlice";

export const AccordionPrice = () => {
  const priceRange = useSelector((store) => store.car.priceRange);
  const dispatch = useDispatch();

  const handlePriceChange = (e) => {
    if (e.target.name === "min-price") {
      const rawValue = e.target.value.replace(/,/g, "")
      dispatch(setPriceRange([Number(rawValue), priceRange[1]]));
    }
    if (e.target.name === "max-price") {
      const rawValue = e.target.value.replace(/,/g, "")
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
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
