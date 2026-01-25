"use client";

import { Heading } from "@/components/signInOut/Heading";
import { InputField } from "@/components/signInOut/InputField";
import { useState } from "react";
import { PhoneField } from "@/components/signInOut/PhoneField";

export const SignUpPage = () => {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email:"",
    password:"",
    mobile:"",
  });
  const [errorMessage, setErrorMessage] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",      
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    isFormValidOnSubmit();
    // handle form submission logic here
    console.log("Form submitted");
  };
  const handleChange = (event) => {
    const { name, value } = event?.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  }
  const handleMobileChange = (value,country) => {
    console.log("Selected country: ", country.dialCode.length);
    console.log("Mobile number changed to: ", value);
    setFields((prevFields) => ({
      ...prevFields,
      mobile: value,
    }));
  }  
  
  const isFormValidOnSubmit = () =>{
    const { firstName, lastName, email, password, mobile } = fields;
    const errors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobile: "",
    }

    if(!firstName.trim()) {
      errors.firstName = "First name is required";
    }else if(firstName.trim().length < 3) {
      errors.firstName = "First name must be at least 3 characters";
    }
    if(!lastName.trim()) {
      errors.lastName = "Last name is required";
    }else if(lastName.trim().length < 3) {
      errors.lastName = "Last name must be at least 3 characters";
    }
    if(!email.trim() || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Email is required";
    }
    if(!password.trim() || password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if(!mobile.trim()) {
      errors.mobile = "Mobile number is required";
    }
    setErrorMessage(errors);
  }
  const isFormValidOnBlur = (event) => {
    const { name, value } = event?.target;

    let message = "";

    if(name === "firstName" && value.trim().length < 3) {
      message = "First name must be at least 3 characters";
    }
    if(name === "lastName" && value.trim().length < 3) {
      message = "Last name must be at least 3 characters";
    }
    if(name === "email" && (!value.trim() || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))) {
      message = "Valid email is required";
    }
    if(name === "password" && value.length < 6) {
      message = "Password must be at least 6 characters";
    }
    
    setErrorMessage((prev) => ({
      ...prev,
      [name]: message,
    }));
  }
  const isMobileValidOnBlur = (event) => {
    console.log("Mobile field blurred",event.target.value.length);
    const { mobile } = fields;
    let message = "";

    if(!mobile.trim()) {
      message = "Mobile number is required";
    }

    setErrorMessage((prev) => ({
      ...prev,
      mobile: message,
    }));
  }


  return (
    <div>
      {/* Heading */}
      <Heading />
      {/* form contents */}
      <form
        className="py-10 px-6 grid grid-cols-1 gap-4 opacity-70"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        
      >
        {/* first name */}
        <InputField
          label="First name"
          type="text"
          value={fields.firstName}
          onChange={handleChange}
          onBlur={isFormValidOnBlur}
          placeholder="First name"
          name="firstName"
          id="firstName"
          message = {errorMessage.firstName}
        />
        {/* last name */}
        <InputField
          label="Last name"
          type="text"
          placeholder="Last name"
          value={fields.lastName}
          onChange={handleChange}
          onBlur={isFormValidOnBlur}
          name="lastName"
          id="lastName"
          message = {errorMessage.lastName}

        />
        {/* phone  */}
        <PhoneField
          label="Phone"
          type="text"
          placeholder="1234567890"
          value={fields.mobile}
          name="mobile"
          id="mobile"
          onChange={handleMobileChange}
          onBlur={isMobileValidOnBlur}
          message = {errorMessage.mobile}
        />
        {/* email */}
        <InputField
          label="Email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={isFormValidOnBlur}
          value={fields.email}
          name="email"
          id="email"
          message = {errorMessage.email}
        />
        {/* password */}
        <InputField
          label="Password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          onBlur={isFormValidOnBlur}
          value={fields.password}
          name="password"
          id="password"
          message = {errorMessage.password}
        />
        <button
          className="w-20 h-10 bg-sky-700 text-white transition-colors duration-300 mt-10"
          type="submit"
          // disabled={!registerButton}
        >
          Register
        </button>
      </form>
    </div>
  );
};
