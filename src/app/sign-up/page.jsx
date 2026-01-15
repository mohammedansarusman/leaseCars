"use client";
import { useForm } from "react-hook-form";

export default function SignUpPage() {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  console.log("error=>", errors);
  const onSubmitFtn = (data) => {
    console.log("data=>", data);
  };

  return (
    <div className="pt-20 w-full bg-pink-300 grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block w-1/2 "></div>
      <form className="py-10" onSubmit={handleSubmit(onSubmitFtn)}>
        <div className="grid grid-cols-1">
          <label>First Name</label>
          <input
            type="text"
            className="outline-1 outline-gray-600 w-1/2 rounded-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          {errors.name?.message && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </div>
        <div className="grid grid-cols-1">
          <label>Last Name</label>
          <input
            type="text"
            className="outline-1 outline-gray-600 w-1/2 rounded-xs"
            {...register("lastName", {
              required: {
                value: true,
                message: "last name is required",
              },
            })}
          />
          {errors.lastName?.message && <p className="text-sm text-red-500">{errors.lastName?.message}</p>}

        </div>
        <div className="grid grid-cols-1">
          <label>Email</label>
          <input
            type="email"
            className="outline-1 outline-gray-600 w-1/2 rounded-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email?.message && <p className="text-sm text-red-500">{errors.email?.message}</p>}

        </div>
        <div className="grid grid-cols-1">
          <label>Password</label>
          <input
            type="password"
            className="outline-1 outline-gray-600 w-1/2 rounded-xs"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              pattern: {
                value: true,
                message: "Password required",
              },
              minLength: {
                value: 3,
                message: "Password length must be minimum 3 charecters",
              },
              maxLength: {
                value: 12,
                message: "Password length must be maximum 12 charecters",
              },
            })}
          />
          {errors.password?.message && <p className="text-sm text-red-500">{errors.password?.message}</p>}

        </div>
        <button className="w-20 h-10 bg-sky-600 hover:text-white transition-colors duration-300 mt-10">
          Register
        </button>
      </form>
    </div>
  );
}
