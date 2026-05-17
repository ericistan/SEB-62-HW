import RecipeModel from "../models/RecipeModel.js";
import { getError, setError } from "../utils/appUtils.js";

export const getRecipes = async (req, res, next) => {
  try {
    const recipes = await RecipeModel.find();
    res.json(recipes);
  } catch (error) {
    return next(setError(error, 400));
  }
};

export const createRecipe = async (req, res, next) => {
  try {
    const recipeFound = await RecipeModel.findOne({ name: req.body.name });
    if (recipeFound) {
      console.error("Recipe already exists");
      return next(getError(403, "Recipe already exists"));
    }

    await RecipeModel.create({
      name: req.body.name,
      instructions: req.body.instructions,
      owner: req.decoded.userId,
    });

    res.json({ status: "ok", message: "Recipe successfully added" });
  } catch (error) {
    return next(setError(error, 400));
  }
};

export const getRecipeById = async (req, res, next) => {
  try {
    const recipeFound = await RecipeModel.findById(req.params.recipeId);

    res.json(recipeFound);
  } catch (error) {
    return next(setError(error, 400));
  }
};
