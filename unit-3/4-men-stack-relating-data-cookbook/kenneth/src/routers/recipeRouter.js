import express from "express";

import {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  addIngredientToRecipe,
} from "../controllers/recipeController.js";

const router = express.Router();

router.get("/", getRecipes);

router.get("/:id", getRecipeById);

router.post("/", createRecipe);

router.patch("/:id", updateRecipe);

router.delete("/:id", deleteRecipe);

router.post("/:recipeId/ingredients/:ingredientId", addIngredientToRecipe);

export default router;
