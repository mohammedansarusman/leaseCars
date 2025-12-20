"use client";
import { setPriceRange } from "@/store/carsSlice";
import { Slider } from "../ui/slider";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const PriceSlider = () => {
  // priceRange is an array of min rate and mx rate [1000,20000 ]
  const priceRange = useSelector((store) => store.car.priceRange);
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const handleChange = (value)=>{
    dispatch(setPriceRange(value))
  }
  useEffect(()=>{
    const params = new URLSearchParams(searchParams);
    params.append("minprice",priceRange[0])
    params.append("maxprice",priceRange[1])
    router.push(`?${params}`)
    console.log("router",router)

     console.log("params in Slider=>",params) 
  },[priceRange])

  return (
    <div className="w-full flex flex-col items-center px- py-4 pb-5 gap-2">
      <section className="w-full flex justify-between items-center">
        {/* minimum price heading */}
        <aside className="flex gap-2">
          <p>AED</p>
          <p>{priceRange[0].toLocaleString()}</p>
        </aside>
        {/* maximum price heading */}
        <aside className="flex gap-2">
          <p>AED</p>
          <p>{priceRange[1].toLocaleString()}</p>
        </aside>
      </section>
      {/* price slider */}
      <Slider
        value={priceRange}
        min={1000}
        max={20000}
        step={50}
        onValueChange={(value) => handleChange(value)}
        className="
          [&_.bg-secondary]:bg-red-500
          [&_.bg-primary]:bg-sky-800
          [&_[role=slider]]:border-sky-800
        "
      />
    </div>
  );
};
