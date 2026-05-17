import IngredientModel from "../models/IngredientModel.js";
import { getError, setError } from "../utils/appUtils.js";

export const getIngredients = async (req, res, next) => {
  try {
    const ingredients = await IngredientModel.find();

    res.json(ingredients);
  } catch (error) {
    return next(setError(error, 400));
  }
};

export const createIngredient = async (req, res, next) => {
  try {
    const ingredientFound = await IngredientModel.findOne({ name: req.body.name });
    if (ingredientFound) {
      console.error("Ingredient already exists");
      return next(getError(403, "Ingredient already exists"));
    }

    await IngredientModel.create({
      name: req.body.name,
    });

    res.json({ status: "ok", message: "Ingredient successfully created" });
  } catch (error) {
    return next(setError(error, 400));
  }
};

export const getIngredientById = async (req, res, next) => {
  try {
    const ingredientFound = await IngredientModel.findById(req.params.ingredientId);
    res.json(ingredientFound);
  } catch (error) {
    return next(setError(error, 400));
  }
};

export const updateIngredientById = async (req, res, next) => {
  try {
    const ingredientFound = await IngredientModel.findById(req.params.ingredientId);
    if (!ingredientFound) {
      console.error("Ingredient not found");
      return next(getError(401, "Ingredient not found"));
    }

    const ingredientNameFound = await IngredientModel.findOne({ name: req.body.name });
    if (ingredientNameFound) {
      console.error("Ingredient already exists");
      return next(getError(403, "Ingredient already exists"));
    }

    await IngredientModel.findByIdAndUpdate(req.params.ingredientId, { name: req.body.name });

    res.json({ status: "ok", message: "Ingredient successfully updated" });
  } catch (error) {
    return next(setError(error, 400));
  }
};
