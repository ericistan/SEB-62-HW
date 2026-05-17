import express from "express";
import { isAuth } from "../middleware/authMiddleware.js";
import { createIngredient, getIngredients } from "../controllers/ingredientController.js";
import { checkCreateIngredientInputs } from "../validators/ingredientValidator.js";
import { checkErrors } from "../validators/checkErrors.js";

const router = express.Router();

router.get("/ingredients", isAuth, getIngredients);
router.put("/ingredients", isAuth, checkCreateIngredientInputs, checkErrors, createIngredient);

export default router;
