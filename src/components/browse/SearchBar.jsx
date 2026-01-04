"use client";
import { Search, X } from "lucide-react";
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCarModel, setFilterData } from "@/store/carsSlice";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const carModel = useSelector(store=>store.car.carModel);
  const carsData = useSelector((store) => store.car.carsData);
  
  useEffect(()=>{
    if(!carModel){
      dispatch(setFilterData(carsData))
    }
  },[carModel])
  
  const handleChange = (e)=>{
    const data = carsData.filter(item=>item.model.toLowerCase().includes(e.target.value.toLowerCase()))
    dispatch(setFilterData(data))
    dispatch(setCarModel(e.target.value));
  }

  const handleCloseButton = ()=>{
    dispatch(setCarModel(""));
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
  }

  return (
    <div className="w-[80%] h-12 rounded-lg ml-2 flex items-center 
    outline-1 outline-gray-300 focus:outline-1 focus-within:outline-blue-500
    lg:w-1/2">
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
