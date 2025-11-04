import React from "react";
import { ButtonGeneral } from "../general/ButtonGeneral";

export const Heading1 = () => {
  return (
    <div className="w-full py-14 px-10 gap-4 flex flex-col">
      <header className="text-3xl font-extrabold tracking-wide text-gray-600">
        Cars Made Easy - The New Way to Drive Cars
      </header>

      <section className="w-full">
        <h1 className="text-md font-extrabold text-gray-600 ">
          Monthly & Long-Term Car Rental in Dubai & the UAE
        </h1>
      </section>
      <ul className="text-gray-600 list-disc px-3">
        <li className="">Order Your New Car in 2 Minutes</li>
        <li>Delivered To Your Doorstep</li>
        <li>Insurance & Maintenance Included</li>
        <li>Flexible Terms From 1 to 24 Months</li>
      </ul>
      <ButtonGeneral value = "Browse Cars"/>
    </div>
  );
};

// className="  text-gray-100 font-bold hover:bg-sky-700 text-xl cursor-pointer hover:text-gray-100"