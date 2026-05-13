import express from "express";
import dotenv from "dotenv";

import connectDB from "./src/db/db.js";
import customerRouter from "./src/routers/customerRouter.js";

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use("/customers", customerRouter);

app.listen(5003);
