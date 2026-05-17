import express from "express";
import { isAuth } from "../middleware/authMiddleware.js";
import { createIngredient, getIngredientById, getIngredients } from "../controllers/ingredientController.js";
import { checkCreateIngredientInputs, checkGetIngredientByIdInputs } from "../validators/ingredientValidator.js";
import { checkErrors } from "../validators/checkErrors.js";

const router = express.Router();

router.get("/ingredients", isAuth, getIngredients);
router.put("/ingredients", isAuth, checkCreateIngredientInputs, checkErrors, createIngredient);
router.post("/ingredients/:ingredientId", isAuth, checkGetIngredientByIdInputs, checkErrors, getIngredientById);

export default router;
