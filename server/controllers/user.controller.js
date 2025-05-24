import User from "../models/user.model.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import ErrorHandler from "../utilities/errorHandler.utility.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import ms from 'ms'

export const register = asyncHandler(async (req, res, next) => {
  const { fullname, username, password, gender } = req.body;
  if (!fullname || !username || !password || !gender) {
    return next(new ErrorHandler("All fields are required", 400));
  }
  const user = await User.findOne({ username });
  if (user) {
    return next(new ErrorHandler("user already exist", 400));
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const avatarType = gender === "male" ? "boy" : "girl";
  const avatar = `https://avatar.iran.liara.run/public/${avatarType}?username=${username}`;
  const newUser = await User.create({
    username,
    fullname,
    password: hashedPassword,
    gender,
    avatar,
  });

  const tokenData = {
    _id: newUser?._id
  }
  const token = jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES})
  const cookieExpireTime = ms(process.env.JWT_EXPIRES)
  res.status(200).cookie("token", token,{
    expires: new Date(Date.now() + cookieExpireTime),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: 'None'
  }).json({
    success: true,
    responseData: {
      newUser,
      token
    },
  });
});

export const login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next(new ErrorHandler("All fields are required", 400));
  }
  const user = await User.findOne({ username });
  if (!user) {
    return next(
      new ErrorHandler("please enter a valid name and password", 400)
    );
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return next(new ErrorHandler("please enter valid username or password"));
  }

  const tokenData = {
    _id: user?._id
  }

  const token = jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES})
  const cookieExpireTime = ms(process.env.JWT_EXPIRES)

  res.status(200).cookie("token", token, {
    
    expires: new Date(Date.now() +  cookieExpireTime),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax"
  }).json({
    success: true,
    responseData: {
      user,
      token
    },
  });
});

export const getProfile = asyncHandler(async (req, res, next) => {
 const userId = req.user._id
 const profile = await User.findById(userId)

 res.status(200).json({
  success: true,
  responseData: profile
 })
});

export const logout = asyncHandler(async (req, res, next) => {
  
  res.status(200).cookie("token", "", {
    expires: new Date(Date.now()),
    httpOnly: true
  }).json({
    success: true,
    message: "logout successfull"
  });
});

export const getOtherUsers = asyncHandler(async (req, res, next) => {
  
  const otherUsers = await User.find({_id: {$ne: req.user._id}})

  res.status(200).json({
    success: true,
    responseData: otherUsers
  });
});

