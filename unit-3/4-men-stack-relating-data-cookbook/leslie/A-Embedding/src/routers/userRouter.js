import express from "express";
import { getAllFoodsByUserId } from "../controllers/userController.js";
import { isAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/users/:id/foods", isAuth, getAllFoodsByUserId);

export default router;
