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
export const FilterButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="block md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button>
            <FilterIcon className="cursor-pointer" />
          </button>
        </SheetTrigger>
        <SheetContent side="bottom" className="z-60 w-full h-screen sm:bg-amber-300 block md:hidden">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <div className="flex justify-between items-center px-2 text-md">
              <SheetClose asChild>
                <button className="cursor-pointer">
                  <X size={25} />
                </button>
              </SheetClose>
              <h1 className="font-semibold text-gray-700">Filters</h1>
              <button className="font-semibold text-blue-500">Reset All</button>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
