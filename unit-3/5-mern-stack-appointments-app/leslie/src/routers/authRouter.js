import express from "express";
import { createUser, login, refreshAccessToken } from "../controllers/authController.js";

const router = express.Router();

router.put("/register", createUser);
router.post("/login", login);
router.post("/refresh", refreshAccessToken);

export default router;
