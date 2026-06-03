import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import connectDB from "./src/db/db.js";
connectDB();

import appointments from "./src/routers/appointments.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/appointments", appointments);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
