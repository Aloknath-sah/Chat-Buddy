import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../../store/slice/user.thunk";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    const response = await dispatch(loginUserThunk(loginData));
    if (response?.payload?.success) {
      navigate("/");
    }
  };
  return (
    <div className="flex justify-center p-6">
      <div className="max-w-[40rem] w-full flex flex-col gap-5 bg-base-200 rounded-lg p-6">
        <h2>Please Login !!!</h2>
        <label className="input w-full">
          <FaRegUser />
          <input
            type="text"
            name="username"
            className="grow w-full"
            placeholder="username"
            onChange={handleInputChange}
          />
        </label>
        <label className="input w-full">
          <TbLockPassword />
          <input
            type="password"
            name="password"
            className="grow"
            placeholder="password"
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleLogin} className="btn btn-soft btn-primary">
          Login
        </button>
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
