import express from "express";
import { createUser, loginUser, refreshAccessToken } from "../controllers/authController.js";
import { checkCreateUserInputs, checkLoginInputs, checkRefreshAccessInputs } from "../validators/authValidator.js";
import { checkErrors } from "../validators/checkErrors.js";

const router = express.Router();

router.put("/auth", checkCreateUserInputs, checkErrors, createUser);
router.post("/auth", checkLoginInputs, checkErrors, loginUser);
router.post("/auth/refresh", checkRefreshAccessInputs, checkErrors, refreshAccessToken);

export default router;
