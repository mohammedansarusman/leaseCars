// 'use client'
import Image from "next/image";
import { data } from "@/app/constant/list";
import { carDetails } from "@/app/constant/details";

export const CarsList = () => {
  console.log("data=>",carDetails);

  return (
    <div>
      {data.map(
        items=>(
          <h1 key={items.id}>{items.id}</h1>
        )
      )}
    </div>
  );
};
