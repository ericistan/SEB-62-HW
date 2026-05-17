import express from "express";
import { createRecipe, getRecipeById, getRecipes } from "../controllers/recipeController.js";
import { isAuth } from "../middleware/authMiddleware.js";
import { checkCreateRecipeInputs, checkGetRecipeById } from "../validators/recipeValidator.js";
import { checkErrors } from "../validators/checkErrors.js";

const router = express.Router();

router.get("/recipes", isAuth, getRecipes);
router.put("/recipes", isAuth, checkCreateRecipeInputs, checkErrors, createRecipe);
router.post("/recipes/:recipeId", isAuth, checkGetRecipeById, checkErrors, getRecipeById);

export default router;
