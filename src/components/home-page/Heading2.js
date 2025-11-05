import React from "react";
import Link from "next/link";
import { sampleData } from "@/app/constant/sample";
import Image from "next/image";
import { DollarSign } from "lucide-react";
import { CarsList } from "../browse/CarsList";

export const Heading2 = () => {
  console.log(sampleData);
  return (
    <div className="w-full py-10 px-10 gap-4 flex flex-col bg-gray-200">
      <header className="flex items-center justify-center gap-3 h-[100px]">
        <section className="w-[90%] text-2xl font-semibold text-gray-600">
          Find Your Perfect Car in Dubai & the UAE
        </section>
        <section className="w-[10%]">
          <Link href={"/browse"} className="text-blue-700 underline">
            View all
          </Link>
        </section>
      </header>
      <CarsList data = {sampleData}/>
    </div>
  );
};
