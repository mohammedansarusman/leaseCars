import React from "react";
import Link from "next/link";
import { sampleData } from "@/app/constant/sample";
import Image from "next/image";

export const Heading2 = () => {
  console.log(sampleData)
  return (
    <div className="w-full py-10 px-10 gap-4 flex flex-col bg-gray-50">
      <header className="flex items-center justify-center gap-3 h-[100px]">
        <section className="w-[90%] text-3xl font-extrabold tracking-wide text-gray-600">
          Find Your Perfect Car in Dubai & the UAE
        </section>
        <section className="w-[10%]">
          <Link href={"/browse"} className="text-blue-700 underline">View all</Link>
        </section>
      </header>
      <section className="w-full h-[400px] bg-blue-700 flex justify-center items-center gap-2">
        { 
          sampleData.map((item)=>(
                    <div className="bg-gray-500 w-[200px] h-[300px] rounded-lg flex flex-col" key={item.id}>
                      <div className="h-1/2 w-full">
                        <Image src={item.img} width={200} height={300} objectFit="contain" alt="car-pic"/>
                      </div>  
                      <div className="h-1/2">{item.model}</div>  
                  </div>
          ))
        }

      </section>
    </div>
  );
};
