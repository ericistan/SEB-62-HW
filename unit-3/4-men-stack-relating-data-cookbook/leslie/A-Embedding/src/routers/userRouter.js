import express from "express";
import { createUser } from "../controllers/userController.js";
import { checkCreateUserInputs } from "../validators/userValidator.js";
import { checkErrors } from "../validators/checkErrors.js";

const router = express.Router();

router.put("/users", checkCreateUserInputs, checkErrors, createUser);

export default router;
