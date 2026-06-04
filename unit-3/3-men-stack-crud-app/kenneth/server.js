import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/db/db.js";
import coinRouter from "./src/routers/coinRouter.js";

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.listen(5004);

app.use(cors());

app.use("/coins", coinRouter);
