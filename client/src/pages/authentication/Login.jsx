import React from "react";
import { FaRegUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="flex justify-center p-6">
      <div className="max-w-[40rem] w-full flex flex-col gap-5 bg-base-200 rounded-lg p-6">
        <h2>Please Login !!!</h2>
        <label className="input w-full">
          <FaRegUser />
          <input type="text" className="grow w-full" placeholder="username" />
        </label>
        <label className="input w-full">
          <TbLockPassword />
          <input type="password" className="grow" placeholder="password" />
        </label>
        <button class="btn btn-soft btn-primary">Login</button>
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
