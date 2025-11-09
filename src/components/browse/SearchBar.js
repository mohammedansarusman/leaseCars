"use client";
import { useState } from "react";
import { Search, X } from "lucide-react";
import React from "react";

export const SearchBar = () => {
  const [carModel, setCarModel] = useState("");
  const handleChange = (e)=>{
    setCarModel(e.target.value);

  }
  const handleCloseButton = ()=>{
    setCarModel("");
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("enetered")


  }

  return (
    <div className="w-[80%] h-12 rounded-lg ml-2 flex items-center outline-1 outline-gray-300 focus:outline-1 focus-within:outline-blue-500">
      <section className="w-1/10 h-full flex  items-center justify-center">
        <Search />
      </section>
      <section className="w-8/10 h-full">
        <form className="flex items-center w-full h-full" onSubmit={handleSubmit}>
          <input
          type="text"
          id="car-type"
          value={carModel}
          onChange={handleChange}
          placeholder="Search your car model.."
          className="focus:outline-none w-8/8 h-full px-2"
        />
        </form>
      </section>
      <section className="w-1/10 h-full flex items-center justify-center">
        {carModel.length >= 1 && <X onClick={handleCloseButton}/>}
      </section>
    </div>
  );
};
