"use client";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const PhoneField = ({ label, id, value, onChange, message, onBlur }) => {

  return (
    <div className="grid grid-cols-1 text-base font-light gap-2 w-full">
      <label htmlFor={id}>{label}</label>
      <div className="pl-4 text-sm py-1 rounded-sm outline-1 outline-gray-300 focus-within:outline-sky-800  w-full flex justify-start items-center">
        <div className="w-[100px]">
          <PhoneInput
            country={"ae"}  
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            message={message}
            inputStyle={{ width: "300px", border: "0px", height: "30px" }}
          />
        </div>
      </div>
      <div className="w-full h-[25px] text-red-500 text-xs">
        <p>{message}</p>
      </div>
    </div>
  );
};
