"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import { CarsCard } from "./CarsCard";
import { useSearchParams } from "next/navigation";

export const CarsList = () => {
  const carsData = useSelector((store) => store.car.carsData);
  const carModel = useSelector((store) => store.car.carModel);
  const searchParams = useSearchParams();
  const brandParam = searchParams.getAll('brand');

  const filteredData = carsData.filter((item) => item.model.toLowerCase().includes(carModel.toLowerCase()));
  const brandFilter = brandParam.length === 0 
    ? filteredData
    : filteredData.filter((item)=>brandParam.includes(item.brand_value))
    

  console.log("filteredData",filteredData)
  
  return (
    <section className="w-full flex flex-wrap justify-center items-center gap-2">
      {brandFilter.map((item) => (
        <CarsCard data = {item} key={item.id}/>
      ))}
    </section>
  );
};
