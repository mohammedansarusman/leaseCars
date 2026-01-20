import { useDispatch, useSelector } from "react-redux";
import { setFields } from "@/store/carsSlice";
import { useState } from "react";

export const InputField = ({ label, type, placeholder, value, name, id}) => {
  const dispatch = useDispatch();
  const records = useSelector((store) => store.car.fields);
  const [message, setMessage] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNo: "",
  });
  const handleChange = (e) => dispatch(setFields({ ...records, [name]: e.target.value }));

  const handleBlur = (event)=>{
    const {name, value} = event.target;
    // first name validation
    if(name==="firstName" && value.trim().length<=3){
      setMessage((prev)=>({...prev,firstName:"minimum 3 characters required"}));
    }else if(value.length>=25){
      setMessage((prev)=>({...prev,firstName:"max length of first name shud be less than 25"}));
    }else{
      setMessage(prev=>({...prev,firstName:""}))
    }
    // last name validation
    if(name==="lastName" && value.trim().length<=3){
      setMessage((prev)=>({...prev,lastName:"minimum 3 characters required"}));
    }else if(value.length>=25){
      setMessage((prev)=>({...prev,lastName:"max length of first name shud be less than 25"}));
    }else{
      setMessage(prev=>({...prev,lastName:""}))
    }

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if(name==='email'){
      const test = emailRegex.test(value.trim())
      console.log("test=>",test)
    }

  }

  return (
    <div className="grid grid-cols-1 text-base font-light gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        id = {id}
        onChange={handleChange}
        onBlur={handleBlur}
        className="outline-1 outline-gray-300 pl-4 text-sm py-2 rounded-sm 
              focus:outline-1 focus:outline-sky-800"
        placeholder={placeholder}
      />
      <div className="w-full h-[25px] text-red-500 font-sm">
        <p>{message[name]}</p>
      </div>
    </div>
  );
};
