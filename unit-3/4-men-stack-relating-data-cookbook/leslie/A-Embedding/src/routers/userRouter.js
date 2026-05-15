import express from "express";
import { createFoodsByUserId, getAllFoodsByUserId } from "../controllers/userController.js";
import { isAuth } from "../middleware/authMiddleware.js";
import { checkCreateFoodsInputs, checkGetAllFoodsInputs } from "../validators/userValidator.js";
import { checkErrors } from "../validators/checkErrors.js";

const router = express.Router();

router.get("/users/:userid/foods", isAuth, checkGetAllFoodsInputs, checkErrors, getAllFoodsByUserId);
router.put("/users/:userid/foods", isAuth, checkCreateFoodsInputs, checkErrors, createFoodsByUserId);

export default router;
