import express from "express";
import {
  createRecipe,
  deleteRecipeById,
  getRecipeById,
  getRecipes,
  updateRecipeById,
} from "../controllers/recipeController.js";
import { isAuth } from "../middleware/authMiddleware.js";
import {
  checkCreateRecipeInputs,
  checkDeleteRecipeById,
  checkGetRecipeById,
  checkUpdateRecipeByIdInputs,
} from "../validators/recipeValidator.js";
import { checkErrors } from "../validators/checkErrors.js";

const router = express.Router();

router.get("/recipes", isAuth, getRecipes);
router.put("/recipes", isAuth, checkCreateRecipeInputs, checkErrors, createRecipe);
router.post("/recipes/:recipeId", isAuth, checkGetRecipeById, checkErrors, getRecipeById);
router.patch("/recipes/:recipeId", isAuth, checkUpdateRecipeByIdInputs, checkErrors, updateRecipeById);
router.delete("/recipes/:recipeId", isAuth, checkDeleteRecipeById, checkErrors, deleteRecipeById);

export default router;
