"use client";
import Image from "next/image";
import { Bruno_Ace } from "next/font/google";
import { useEffect, useState } from "react";

const bruno = Bruno_Ace({
  subsets: ["latin"],
  weight: "400",
});
export const DynamicHeading3 = () => {
  const [banner, setBanner] = useState("Flexible Terms");
  const banners = [
    "Flexible Terms",
    "24/7 Roadside Assistance",
    "Maintenance and Wear",
    "Protection Against Depreciation",
    "No Hidden Costs",
    "Comprehensive Insurance",
  ];
  const getRandom = () => Math.floor(Math.random() * banners.length);
  useEffect(() => {
    const interval = setInterval(() => {
      const result = getRandom();
      setBanner(banners[result]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`w-full h-[150px] sm:h-[200px] md:h-[220px] lg:h-[300] xl:h-[350px] 2xl:h-[400px] relative ${bruno.className}`}
    >
      <Image
        src="/howitWorks.jpg"
        alt="banner-img"
        fill
        style={{ objectFit: "cover" }}
      />
      <h1
        className="absolute top-5 left-5 text-xs text-white  bg-gray-500 px-1 py-1
        md:text-md md:px-2 md:py-2
        lg:text-lg
        "
      >
        {banner}
      </h1>
    </div>
  );
};
