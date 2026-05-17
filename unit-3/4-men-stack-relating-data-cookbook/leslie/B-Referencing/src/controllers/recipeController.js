import IngredientModel from "../models/IngredientModel.js";
import RecipeModel from "../models/RecipeModel.js";
import { getError, hasDuplicates, setError } from "../utils/appUtils.js";

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

    if (hasDuplicates(req.body.ingredients)) {
      console.error("Duplicates found in ingredients");
      return next(getError(400, "Duplicates found in ingredients"));
    }

    const countExistingIngredients = await IngredientModel.countDocuments({
      _id: { $in: req.body.ingredients },
    });

    if (countExistingIngredients !== req.body.ingredients.length) {
      console.error("Ingredients contain foreign ids");
      return next(getError(422, "Contains invalid value(s)"));
    }

    await RecipeModel.create({
      name: req.body.name,
      instructions: req.body.instructions,
      owner: req.decoded.userId,
      ingredients: req.body.ingredients,
    });

    res.json({ status: "ok", message: "Recipe successfully added" });
  } catch (error) {
    return next(setError(error, 400));
  }
};

export const getRecipeById = async (req, res, next) => {
  try {
    const recipeFound = await RecipeModel.findById(req.params.recipeId).populate("ingredients");

    res.json(recipeFound);
  } catch (error) {
    return next(setError(error, 400));
  }
};

export const updateRecipeById = async (req, res, next) => {
  try {
    const recipeFound = await RecipeModel.findById(req.params.recipeId);
    if (!recipeFound) {
      console.error("Recipe not found");
      return next(getError(401, "Recipe not found"));
    }

    if (!recipeFound.owner.equals(req.decoded.userId)) {
      console.error("You are not the owner of this recipe");
      return next(getError(403, "You are not the owner of this recipe"));
    }

    if (hasDuplicates(req.body.ingredients)) {
      console.error("Duplicates found in ingredients");
      return next(getError(400, "Duplicates found in ingredients"));
    }

    const countExistingIngredients = await IngredientModel.countDocuments({
      _id: { $in: req.body.ingredients },
    });

    if (countExistingIngredients !== req.body.ingredients.length) {
      console.error("Ingredients contain foreign ids");
      return next(getError(422, "Contains invalid value(s)"));
    }

    recipeFound.name = req.body.name;
    recipeFound.instructions = req.body.instructions;
    recipeFound.ingredients = req.body.ingredients;

    await recipeFound.save();

    res.json({ status: "ok", message: "Recipe successfully updated" });
  } catch (error) {
    return next(setError(error, 400));
  }
};
