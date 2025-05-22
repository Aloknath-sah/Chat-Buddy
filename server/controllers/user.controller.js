import User from "../models/user.model.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import ErrorHandler from "../utilities/errorHandler.utility.js";
import bcrypt from "bcryptjs";

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
  res.status(200).json({
    success: true,
    responseData: {
      newUser,
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

  res.status(200).json({
    success: true,
    responseData: {
      user,
    },
  });
});
