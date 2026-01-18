'use client'

import { Heading } from "@/components/signInOut/Heading";
import { InputField } from "@/components/signInOut/InputField";
import { PhoneField } from "@/components/signInOut/PhoneField";
import { useSelector } from "react-redux";


export const SignUpPage = () => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("form submitted", customerDetails)
  }
  const customerDetails = useSelector((store)=>store.car?.fields)
  const {firstName, lastName, email, password, mobileNo} = customerDetails;
  return (
    <div>
      {/* Heading */}
      <Heading />
      {/* form contents */}
      <form className="py-10 px-6 grid grid-cols-1 gap-4 opacity-70" onSubmit={handleSubmit}>
        {/* first name */}
        <InputField label="First name" type="text" placeholder="First name" value = {firstName} name = "firstName" />
        {/* last name */}
        <InputField label="Last name" type="text" placeholder="Last name" value = {lastName} name = "lastName"/>
        {/* phone  */}
        <PhoneField label = "Phone" type = "text" placeholder = "1234567890" value = {mobileNo} name = "mobileNo"/>
        {/* email */}
        <InputField label="Email" type="email" placeholder="Email" value = {email} name = "email"/>
        {/* password */}
        <InputField label="Password" type="password" placeholder="Password" password = {password} name = "password" />
        <button className="w-20 h-10 bg-sky-600 hover:text-white transition-colors duration-300 mt-10" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
