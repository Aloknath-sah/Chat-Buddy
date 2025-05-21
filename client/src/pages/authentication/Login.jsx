import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { Link } from "react-router-dom";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setLoginData({
      ...loginData,
      [name]: value
    })
  }
  return (
    <div className="flex justify-center p-6">
      <div className="max-w-[40rem] w-full flex flex-col gap-5 bg-base-200 rounded-lg p-6">
        <h2>Please Login !!!</h2>
        <label className="input w-full">
          <FaRegUser />
          <input type="text" name="username" className="grow w-full" placeholder="username" onChange={handleInputChange} />
        </label>
        <label className="input w-full">
          <TbLockPassword />
          <input type="password" name="password" className="grow" placeholder="password" onChange={handleInputChange} />
        </label>
        <button className="btn btn-soft btn-primary">Login</button>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400 underline">
            Sign Up
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};
