"use client";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetHeader,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { useState } from "react";
import { FilterIcon } from "lucide-react";
import { X } from "lucide-react";
import { AccordionPrice } from "./AccordionPrice";
import { FilterOffers } from "./FilterOffers";
import { data } from "@/app/constant/list";
import { AccordionMake } from "./AccordionMake";
import { useDispatch } from "react-redux";
import { setBrands, setPriceRange } from "@/store/carsSlice";
import { setEnabled } from "@/store/themeSlice";
export const FilterButton = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  
  const handleClick = () =>{
    dispatch(setPriceRange([1000,20000]));
    dispatch(setBrands([]));
    dispatch(setEnabled(false))

  }
  return (
    <div className="block md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button>
            <FilterIcon className="cursor-pointer" />
          </button>
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="z-60 w-full h-screen block md:hidden"
        >
          <SheetHeader>
            <SheetTitle></SheetTitle>
            {/* Close button, filters and reset all */}
            <div className="flex justify-between items-center px-2 text-md border-b border-gray-200 pb-4">
              <SheetClose asChild>
                <button className="cursor-pointer">
                  <X size={25} />
                </button>
              </SheetClose>
              <h1 className="font-semibold text-gray-700">Filters</h1>
              <button className="font-semibold text-sky-800" onClick={handleClick}>Reset All</button>
            </div>

            {/* Accordion for Price */}
            <AccordionPrice />
            {/* Offers toggle button */}
            <FilterOffers />
            {/*  */}
            {/* Accordiaon for Car Make */}
            <AccordionMake />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
