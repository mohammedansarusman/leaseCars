import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export const AccordionPrice = () => {
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="px-5 hover:no-underline text-base font-semibold text-gray-700">{`Price (AED)`}</AccordionTrigger>
          <AccordionContent>
            <div className="w-full">
                {/* input min price and max price */}
                <section className="w-full flex gap-2 py-2 px-2">
                    <input 
                        type="text" 
                        className="border-none outline-1 outline-gray-500 rounded-sm hover:outline-blue-500 h-8 focus:ring-2 w-1/2"
                    />
                    <input 
                        type="text" 
                        className="border-none outline-1 outline-gray-500 hover:outline-blue-500 h-8 focus:ring-2 w-1/2"
                    />
                </section>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
