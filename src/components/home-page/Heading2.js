import React from "react";
import Link from "next/link";
import { sampleData } from "@/app/constant/sample";
import Image from "next/image";
import { DollarSign } from "lucide-react";

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
      <section className="w-full h-[300px] flex justify-center items-center gap-2 ">
        {sampleData.map((item) => (
          <div
            className="w-max-[200px] h-[300px] rounded-lg flex flex-col items-center pt-4 bg-white relative"
            key={item.id}
          >
            <div className="h-1/2 w-full flex justify-center items-center">
              <Image
                src={item.img}
                width={200}
                height={300}
                objectFit="contain"
                alt="car-pic"
                className=""
              />
            </div>
            {item.discount_value > 0 && (
              <div className="bg-orange-400 w-[100px] h-[20px] rounded-lg opacity-90 ml-1 absolute left-1 top-32 flex justify-center items-center">
                <p className="text-xs">{`AED ${item.discount_value} OFF`}</p>
              </div>
            )}
            <div className="h-1/2  px-2 py-2 flex flex-col gap-2">
              <p className="text-sm">{item.model}</p>
              <div className="flex items-center gap-2">
                <p className="text-sm">
                  {(item.listing_price - item.discount_value).toLocaleString(
                    "en-US",
                    {
                      style: "currency",
                      currency: "AED",
                      minimumFractionDigits: 0,
                    }
                  )}
                </p>
                <p className="text-xs line-through">
                  {item.listing_price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "AED",
                    minimumFractionDigits: 0,
                  })}
                </p>
              </div>
              <p className="text-xs">per month</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
