"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch, useSelector } from "react-redux";
import { setFields } from "@/store/carsSlice";

export const PhoneField = ({ label, type, placeholder, name, id, warning }) => {
  const dispatch = useDispatch();
  const records = useSelector((store) => store.car.fields);
  const [phone, setPhone] = useState("");

  const handleChange = (e) => setPhone(e);
  const handleChangeMobile = (e) =>
    dispatch(setFields({ ...records, [name]: e.target.value }));

  return (
    <div className="grid grid-cols-1 text-base font-light gap-2 w-full">
      <label htmlFor={id}>{label}</label>
      <div className="pl-4 text-sm py-1 rounded-sm outline-1 outline-gray-300 focus-within:outline-sky-800  w-full flex justify-start items-center">
        <div className="w-[100px]">
          <PhoneInput
            country={"ae"}
            value={phone}
            onChange={handleChange}
            inputStyle={{ width: "100px", border: "0px", height: "30px" }}
          />
        </div>
        <div className="flex-1">
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            className="outline-none w-full h-[30px]"
            onChange={handleChangeMobile}
          />
        </div>
        
      </div>
      <div className="w-full h-[25px] text-red-500 font-sm">
          <p>{warning}</p>
        </div>
    </div>
  );
};
