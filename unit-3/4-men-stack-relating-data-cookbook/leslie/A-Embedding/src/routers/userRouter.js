import express from "express";
import { createUser, loginUser, refreshAccessToken } from "../controllers/userController.js";
import { checkCreateUserInputs, checkLoginInputs, checkRefreshAccessInputs } from "../validators/userValidator.js";
import { checkErrors } from "../validators/checkErrors.js";

const router = express.Router();

router.put("/users", checkCreateUserInputs, checkErrors, createUser);
router.post("/users", checkLoginInputs, checkErrors, loginUser);
router.post("/users/refresh", checkRefreshAccessInputs, checkErrors, refreshAccessToken);

export default router;
