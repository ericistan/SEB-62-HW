import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/db/db.js";
import {
  globalErrorHandler,
  jsonErrorHandler,
} from "./src/middlewares/errorHandlers.js";
import userRouter from "./src/routers/userRouters.js";
import foodRouter from "./src/routers/foodRouters.js";
import { isSignedIn } from "./src/middlewares/isSignIn.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(jsonErrorHandler);

app.use((req, res, next) => {
  console.log(`${req.method} request made to: ${req.url}`);
  next();
});

// Define all API here:
app.use("/auths", userRouter);
app.use(isSignedIn);
app.use("/users/:userId/foods", foodRouter);

//-----------------------------------------------
app.use(globalErrorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
