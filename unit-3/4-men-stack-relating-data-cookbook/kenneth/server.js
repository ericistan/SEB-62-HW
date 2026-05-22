import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/db/db.js";
import cors from "cors";

import authRouter from "./src/routers/authRouter.js";
import recipeRouter from "./src/routers/recipeRouter.js";
import ingredientRouter from "./src/routers/ingredientRouter.js";

import isSignedIn from "./src/middleware/isSignedIn.js";

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use(cors());

app.listen(5006);

app.use("/auth", authRouter);

app.use(isSignedIn);

app.use("/recipes", recipeRouter);

app.use("/ingredients", ingredientRouter);
