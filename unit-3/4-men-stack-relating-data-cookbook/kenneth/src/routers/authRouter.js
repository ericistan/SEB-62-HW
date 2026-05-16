import express from "express";

import { getUsers, signUp, signIn } from "../controllers/authController.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/sign-up", signUp);

router.post("/sign-in", signIn);

export default router;
