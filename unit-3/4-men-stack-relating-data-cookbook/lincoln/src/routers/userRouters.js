import express from "express";
import * as auths from "../controllers/auths.js";

const userRouter = express.Router();

userRouter.put("/register", auths.registerUser);
userRouter.post("/login", auths.loginUser);
userRouter.post("/refresh", auths.refreshAccessToken);

export default userRouter;
