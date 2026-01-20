"use client";

import { Heading } from "@/components/signInOut/Heading";
import { InputField } from "@/components/signInOut/InputField";
import { PhoneField } from "@/components/signInOut/PhoneField";
import { useSelector } from "react-redux";
import { useState } from "react";

export const SignUpPage = () => {
  // const [warning, setWarning] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   mobileNo: "",
  // });

  const customerDetails = useSelector((store) => store.car?.fields);
  const { firstName, lastName, email, password, mobileNo } = customerDetails;
  const handleSubmit = (e) => {
    e.preventDefault();
    // validateForm(firstName, lastName, email, password, mobileNo);
    console.log("form submitted", customerDetails);
  };
  

  // const validateForm = (firstName, lastName, email, password, mobileNo) => {
  //   const errors = {};
  //   if (firstName?.length <= 3) {
  //     errors.firstName = "The size of first name should be greater than 3";
  //   }
  //   if (lastName?.length <= 3) {
  //     errors.lastName = "The size of last name should be greater than 3";
  //   }
  //   if (email?.length <= 3) {
  //     errors.email = "The size of email should be greater than 3";
  //   }
  //   if (password?.length <= 3) {
  //     errors.password = "The size of password should be greater than 3";
  //   }
  //   if (mobileNo?.length <= 3) {
  //     errors.mobileNo = "The size of mobile no should be greater than 3";
  //   }
  //   console.log("errors=", errors);
  //   setWarning(errors);
  // };

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
          placeholder="First name"
          value={firstName}
          name="firstName"
          id="firstName"
          // warning={warning.firstName}
        />
        {/* last name */}
        <InputField
          label="Last name"
          type="text"
          placeholder="Last name"
          value={lastName}
          name="lastName"
          id="lastName"
          // warning={warning.lastName}

        />
        {/* phone  */}
        <PhoneField
          label="Phone"
          type="text"
          placeholder="1234567890"
          value={mobileNo}
          name="mobileNo"
          id="mobileNo"
          // warning={warning.mobileNo}

        />
        {/* email */}
        <InputField
          label="Email"
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          id="email"
          // warning={warning.email}

        />
        {/* password */}
        <InputField
          label="Password"
          type="password"
          placeholder="Password"
          password={password}
          name="password"
          id="password"
          // warning={warning.password}

        />
        <button
          className="w-20 h-10 bg-sky-600 hover:text-white transition-colors duration-300 mt-10"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};
