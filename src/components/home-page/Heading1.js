import React from "react";
import { ButtonGeneral } from "../general/ButtonGeneral";
import Link from "next/link";
import Image from "next/image";

export const Heading1 = () => {
  return (
    <div className="w-full py-14 px-10 flex flex-col md:flex-row">
      {/* Cars made Easy ... Heading */}
      <div className=" md:w-1/2 md:py-8 lg:py-10 xl:py-15 
      flex flex-col gap-5 lg:gap-10">
        <header className="text-3xl font-extrabold tracking-wide text-gray-600">
          Cars Made Easy - The New Way to Drive Cars
        </header>
        <section className="w-full">
          <h1 className="text-md font-extrabold text-gray-600 ">
            Monthly & Long-Term Car Rental in Dubai & the UAE
          </h1>
        </section>
        <ul className="text-gray-600 list-disc px-3 lg:text-lg">
          <li className="">Order Your New Car in 2 Minutes</li>
          <li>Delivered To Your Doorstep</li>
          <li>Insurance & Maintenance Included</li>
          <li>Flexible Terms From 1 to 24 Months</li>
        </ul>
        <Link href="/browse">
          <ButtonGeneral value="Browse Cars" />
        </Link>
      </div>
      {/* Image  -   */}
      <div className="hidden md:block md:w-1/2">
        <Image alt="homepage-image" src="/youngCouple.webp" width={150} height={200} objectFit="contain" className="w-full h-full"/>
      </div>
    </div>
  );
};
