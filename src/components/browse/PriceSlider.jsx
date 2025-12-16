"use client";
import { setPriceRange } from "@/store/carsSlice";
import { Slider } from "../ui/slider";
import { useSelector, useDispatch } from "react-redux";

export const PriceSlider = () => {
  const priceRange = useSelector((store) => store.car.priceRange);
  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col items-center px-2 py-2 gap-2">
      <section className="w-full flex justify-between items-center">
        <aside className="flex gap-2">
          <p>AED</p>
          <p>{priceRange[0].toLocaleString()}</p>
        </aside>
        <aside className="flex gap-2">
          <p>AED</p>
          <p>{priceRange[1].toLocaleString()}</p>
        </aside>
      </section>
      <Slider
        value={priceRange}
        min={1000}
        max={20000}
        step={50}
        onValueChange={(value) => dispatch(setPriceRange(value))}
        className="
          [&_.bg-secondary]:bg-red-500
          [&_.bg-primary]:bg-sky-600
          [&_[role=slider]]:border-sky-800
          
          
        "
      />
    </div>
  );
};
