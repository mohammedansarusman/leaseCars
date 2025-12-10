"use client";
import Image from "next/image";
// import { data } from "@/app/constant/list";
import { carDetails } from "@/app/constant/details";
import { useSelector } from "react-redux";
import { CarsCard } from "./CarsCard";

export const CarsList = () => {
  const carsData = useSelector((store) => store.car.carsData);
  const carModel = useSelector((store) => store.car.carModel);
  const filteredData = carsData.filter((item) => item.model.toLowerCase().includes(carModel.toLowerCase()));
  console.log("filteredData",filteredData)
  
  return (
    <section className="w-full flex flex-wrap justify-center items-center gap-2">
      {filteredData.map((item) => (
        <CarsCard data = {item} key={item.id}/>
      ))}
    </section>
  );
};
