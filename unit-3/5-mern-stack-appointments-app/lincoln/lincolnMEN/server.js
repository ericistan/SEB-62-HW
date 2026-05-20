import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
dotenv.config();
import connectDB from "./src/db/db.js";
import {
  globalErrorHandler,
  jsonErrorHandler,
} from "./src/middlewares/errorHandlers.js";
import appts from "./src/routers/appts.js";
connectDB();

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(jsonErrorHandler);

app.use((req, res, next) => {
  console.log(`${req.method} method is sent to ${req.url}`);
  next();
});

app.use("/api", appts);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
});

app.use(globalErrorHandler);
