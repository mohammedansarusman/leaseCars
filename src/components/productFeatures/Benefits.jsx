import {
  CircleArrowOutDownRightIcon
} from "lucide-react";
import React from "react";

export const Benefits = () => {
  return (
    <div className="w-full bg-sky-600 text-white py-20 px-5">
      <h1 className="text-xl font-semibold">
        All-Inclusive Benefits with Every Car Subscription
      </h1>
      <p className="text-base font-light mt-7">
        Owning a car comes with high upfront costs, long-term commitments, and
        unexpected expenses. With Carasti, you get a brand-new car on an
        all-inclusive subscription – just add fuel or charge, and you’re ready
        to go! Enjoy driving with everything you need, hassle-free.
      </p>
      <div className="mt-7 text-base font-semibold flex flex-col gap-2">
        <div className="flex items-center gap-5">
          <CircleArrowOutDownRightIcon />
          <p>Delivery to Your Doorstep</p>
        </div>
        <div className="flex items-center gap-5">
          <CircleArrowOutDownRightIcon />
          <p>Comprehensive Insurance Coverage</p>
        </div>
        <div className="flex items-center gap-5">
          <CircleArrowOutDownRightIcon />
          <p>Maintenance Included</p>
        </div>
        <div className="flex items-center gap-5">
          <CircleArrowOutDownRightIcon />
          <p>24/7 Roadside Assistance</p>
        </div>
        <div className="flex items-center gap-5">
          <CircleArrowOutDownRightIcon />
          <p>Accident Replacement Vehicle</p>
        </div>
      </div>
    </div>
  );
};
