import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [signupData, setSignupData] = useState({
      fullname: "",
      username: "",
      password: "",
      confirmPassword: ""
    })
  
    const handleInputChange = (e) => {
      const {name, value} = e.target
      setSignupData({
        ...signupData,
        [name]: value
      })
    }
    console.log(signupData)
  return (
    <div className="flex justify-center p-6">
      <div className="max-w-[40rem] w-full flex flex-col gap-5 bg-base-200 rounded-lg p-6">
        <h2>Please SignUp !!!</h2>
        <label className="input w-full">
          <FaRegUser />
          <input type="text" name="name" className="grow w-full" placeholder="Full name" onChange={handleInputChange} />
        </label>
        <label className="input w-full">
          <FaRegUser />
          <input type="text" name="username" className="grow w-full" placeholder="username" onChange={handleInputChange} />
        </label>
        <label className="input w-full">
          <TbLockPassword />
          <input type="password" name="password" className="grow" placeholder="password" onChange={handleInputChange} />
        </label>
        <label className="input w-full">
          <TbLockPassword />
          <input type="password" name="confirmPassword" className="grow" placeholder="confirm password" onChange={handleInputChange} />
        </label>
        <button className="btn btn-soft btn-primary">Sign Up</button>
        <p>
          Already have an account?{" "}
          <Link to="/signup" className="text-blue-400 underline">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};
