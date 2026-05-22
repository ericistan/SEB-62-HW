import express from "express";
import { createUser, login, refreshAccessToken } from "../controllers/authController.js";
import { checkLogin, checkRegistration, refreshToken_notEmpty } from "../validators/authValidator.js";
import { checkErrors } from "../validators/checkErrors.js";

const router = express.Router();

router.put("/register", checkRegistration, checkErrors, createUser);
router.post("/login", checkLogin, checkErrors, login);
router.post("/refresh", refreshToken_notEmpty, checkErrors, refreshAccessToken);

export default router;
