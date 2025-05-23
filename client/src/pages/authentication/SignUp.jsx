import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUserThunk } from "../../store/slice/user.thunk";
import toast from "react-hot-toast";

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  const [signupData, setSignupData] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "male",
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSignUp = async () => {
    if (signupData.password !== signupData.confirmPassword) {
      return toast.error("Password and confirm password doesn't match");
    }
    console.log(signupData);
    const response = await dispatch(registerUserThunk(signupData));

    if (response?.payload?.success) {
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center p-6">
      <div className="max-w-[40rem] w-full flex flex-col gap-5 bg-base-200 rounded-lg p-6">
        <h2>Please SignUp !!!</h2>
        <label className="input w-full">
          <FaRegUser />
          <input
            type="text"
            name="fullname"
            className="grow w-full"
            placeholder="Full name"
            onChange={handleInputChange}
          />
        </label>
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
        <label className="input w-full">
          <TbLockPassword />
          <input
            type="password"
            name="confirmPassword"
            className="grow"
            placeholder="confirm password"
            onChange={handleInputChange}
          />
        </label>
        <label className="input w-full">
          <label htmlFor="male" className="flex gap-3 items-center">
            <input
              id="male"
              name="gender"
              value="male"
              type="radio"
              className="radio"
              onChange={handleInputChange}
            />{" "}
            male
          </label>
          <label htmlFor="female" className="flex gap-3 items-center">
            <input
              id="female"
              name="gender"
              value="female"
              type="radio"
              className="radio"
              onChange={handleInputChange}
            />
            female
          </label>
        </label>
        <button onClick={handleSignUp} className="btn btn-soft btn-primary">
          Sign Up
        </button>
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
