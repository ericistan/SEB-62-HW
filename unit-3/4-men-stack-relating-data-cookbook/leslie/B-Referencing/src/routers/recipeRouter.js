import express from "express";
import { createRecipe, getRecipeById, getRecipes, updateRecipeById } from "../controllers/recipeController.js";
import { isAuth } from "../middleware/authMiddleware.js";
import {
  checkCreateRecipeInputs,
  checkGetRecipeById,
  checkUpdateRecipeByIdInputs,
} from "../validators/recipeValidator.js";
import { checkErrors } from "../validators/checkErrors.js";

const router = express.Router();

router.get("/recipes", isAuth, getRecipes);
router.put("/recipes", isAuth, checkCreateRecipeInputs, checkErrors, createRecipe);
router.post("/recipes/:recipeId", isAuth, checkGetRecipeById, checkErrors, getRecipeById);
router.patch("/recipes/:recipeId", isAuth, checkUpdateRecipeByIdInputs, checkErrors, updateRecipeById);

export default router;
