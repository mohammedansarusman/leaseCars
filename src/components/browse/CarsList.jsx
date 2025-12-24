"use client";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { CarsCard } from "./CarsCard";
import { useEffect } from "react";
import { setFilterData } from "@/store/carsSlice";

export const CarsList = () => {
  const dispatch = useDispatch();
  const carsData = useSelector((store) => store.car.carsData);
  const carModel = useSelector((store) => store.car.carModel);
  const filterData = useSelector((store) => store.car.filterData);
  const priceRange = useSelector((store) => store.car.priceRange);

  useEffect(() => {
    const data = carsData.filter(
      (item) =>
        item?.listing_price > priceRange[0] &&
        item?.listing_price <= priceRange[1]
    );
    dispatch(setFilterData(data))
    
  }, [priceRange]);

  return (
    <section className="w-full flex flex-wrap justify-center items-center gap-2">
      {filterData.map((item) => (
        <CarsCard data={item} key={item.id} />
      ))}
      {filterData.length===0 && <h1>Item not found</h1>}
    </section>
  );
};
