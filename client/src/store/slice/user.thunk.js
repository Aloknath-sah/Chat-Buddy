import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../../components/utilities/axiosInstance";

export const loginUserThunk = createAsyncThunk("user/login", async ({username, password}, {rejectWithValue}) => {
  try {
    const response = await axiosInstance.post("/user/login", {
      username,
      password,
    });
    toast.success("Login Successfull")
    return response.data
  } catch (error) {
    console.error(error)
    const errorOutput = error?.response?.data?.errMessage;
    toast.error(errorOutput);
    return isRejectedWithValue(errorOutput)
  }
});

export const registerUserThunk = createAsyncThunk("user/signup", async ({fullname,username, password, gender}, {rejectWithValue}) => {
  try {
    const response = await axiosInstance.post("/user/register", {
      fullname,
      username,
      password,
      gender
    });
     toast.success("Account created Successfully")
    return response.data
  } catch (error) {
    console.error(error)
    const errorOutput = error?.response?.data?.errMessage;
    toast.error(errorOutput);
    return isRejectedWithValue(errorOutput)
  }
});

export const logoutUserThunk = createAsyncThunk("user/logout", async (_, {rejectWithValue}) => {
  try {
    const response = await axiosInstance.post("/user/logout");
    toast.success("logout successfull")
    
    return response.data
  } catch (error) {
    console.error(error)
    const errorOutput = error?.response?.data?.errMessage;
    toast.error(errorOutput);
    return isRejectedWithValue(errorOutput)
  }
});

export const getUserProfileThunk = createAsyncThunk("user/getProfile", async (_, {rejectWithValue}) => {
  try {
    const response = await axiosInstance.get("/user/getProfile");
    
    return response.data
  } catch (error) {
    console.error(error)
    const errorOutput = error?.response?.data?.errMessage || "Failed to fetch profile" ;
    
    return isRejectedWithValue(errorOutput)
  }
});

export const getOtherUsersThunk = createAsyncThunk("user/getOtherUsers", async (_, {rejectWithValue}) => {
  console.log("hello")
  try {
    const response = await axiosInstance.get("/user/get-other-users");
    console.log("userThunk", response)
    return response.data
  } catch (error) {
    console.error(error)
    const errorOutput = error?.response?.data?.errMessage;
    
    return isRejectedWithValue(errorOutput)
  }
});