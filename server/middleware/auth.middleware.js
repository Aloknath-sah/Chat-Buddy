import { asyncHandler } from '../utilities/asyncHandler.utility.js';
import ErrorHandler from '../utilities/errorHandler.utility.js'
import jwt from 'jsonwebtoken'

export const isAuthenticated = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = req.cookies?.token || (authHeader && authHeader.startsWith('Bearer ') ? authHeader.replace('Bearer ', '') : null);
  if(!token) {
    return next(new ErrorHandler("Invalid Token", 400))
  }
   try {
    const tokenData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = tokenData;
    next();
  } catch (error) {
    return next(new ErrorHandler("Invalid or Expired Token", 401));
  }
});