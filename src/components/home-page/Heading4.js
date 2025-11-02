import React from "react";
import { ButtonGeneral } from "../general/ButtonGeneral";

export const Heading4 = () => {
  return (
    <div className="w-full py-10 px-10 gap-4 flex flex-col bg-gray-50 text-gray-600">
      <header className="text-3xl font-extrabold tracking-wide text-gray-600">
        Drive Brand New Cars in Dubai & the UAE – No Loans, No Down Payments
      </header>
      {/* <p className="font-bold text-xl">Choose Your Car</p>   */}
      <p className="font-light">Get behind the wheel of a brand-new car without the long-term commitments, down payments, or loans. Car Lease offers a flexible, all-inclusive subscription that covers everything from insurance to maintenance, letting you enjoy the latest models with zero hassle.</p>
      {/* <p className="font-bold text-xl">Ready in No Time</p> */}
      <p className="font-light">With Car Lease, you’ll experience the freedom to drive a new car on your terms, while avoiding the stress and financial burden of traditional ownership. Join thousands of happy Car Lease customers who have made the switch to an easier, more enjoyable way to drive.</p>
      <footer className="flex justify-center">
        <ButtonGeneral value = "Find My Car"/>
        <ButtonGeneral value = "Contact Us"/>
      </footer>
    </div>
  );
};
