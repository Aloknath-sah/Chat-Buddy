import dotenv from "dotenv";
import express from "express";
import userRoute from "./routes/user.route.js";
import { connectDB } from "./db/connection1.db.js";
import { errorMiddleware } from "./middleware/error.middleware.js";

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/api/v1/user", userRoute);

app.use(errorMiddleware);

app.listen(port, function () {
  console.log(`server is listening at port${port}`);
});
