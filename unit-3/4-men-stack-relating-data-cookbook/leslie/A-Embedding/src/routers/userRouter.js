import express from "express";
import { createFoodsByUserId, getAllFoodsByUserId } from "../controllers/userController.js";
import { isAuth } from "../middleware/authMiddleware.js";
import { checkCreateFoodsInputs } from "../validators/userValidator.js";

const router = express.Router();

router.get("/users/:id/foods", isAuth, getAllFoodsByUserId);
router.put("/users/:id/foods", isAuth, checkCreateFoodsInputs, createFoodsByUserId);

export default router;
