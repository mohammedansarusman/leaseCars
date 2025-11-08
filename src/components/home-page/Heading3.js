import React from "react";
import { ButtonGeneral } from "../general/ButtonGeneral";
import { DynamicHeading3 } from "./DynamicHeading3";

export const Heading3 = () => {
  return (
    <div className="w-full py-10 px-10 gap-4 flex flex-col bg-gray-50 text-gray-600">
      <DynamicHeading3 />
      <header className="text-3xl font-extrabold tracking-wide text-gray-600">
        How it Works
      </header>
      <p className="font-bold text-xl">Choose Your Car</p>  
      <p className="font-light">Browse a wide range of new models, select your preferred subscription term, and submit your details—all digitally, from wherever you are. Approval is quick and easy!</p>
      <p className="font-bold text-xl">Ready in No Time</p>
      <p>Once approved, we’ll handle all the details and have your car prepped for pickup or delivery, getting you behind the wheel quickly!</p>
      <p className="font-bold text-xl">Drive and Decide</p>
      <p>Enjoy the freedom to drive on your terms. At the end of your subscription, return the car, renew, or switch to a new model – it’s up to you.</p>
      <footer className="flex justify-center">
        <ButtonGeneral value = "Find My Car"/>
      </footer>
    </div>
  );
};
