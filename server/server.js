import {app,server} from './socket/socket.js'
import express from "express";
import userRoute from "./routes/user.route.js";
import { connectDB } from "./db/connection1.db.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import MessageRoute from "./routes/message.route.js";
import cors from "cors";

connectDB();

app.use(cors({
  origin: [process.env.CLIENT_URL, 'http://localhost:5173'],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 5000;

app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", MessageRoute);

app.use(errorMiddleware);

server.listen(port, function () {
  console.log(`server is listening at port${port}`);
});
