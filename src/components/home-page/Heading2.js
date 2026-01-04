import React from "react";
import Link from "next/link";
import { sampleData } from "@/app/constant/sample";
import { SampleCars } from "../browse/SampleCars";

export const Heading2 = () => {
  return (
    <div className="w-full py-10 px-5 gap-4 flex flex-col ">
      <header className="flex justify-between items-start gap-3 h-[50px]">
        <section className="w-[80%] text-xl font-semibold text-gray-600">
          Find Your Perfect Car in Dubai & the UAE
        </section>
        <section className="w-[20%] text-right">
          <Link href={"/browse"} className="text-blue-700 underline text-sm">
            View all
          </Link>
        </section>
      </header>
      <SampleCars data={sampleData} />
    </div>
  );
};
