import Ingredient from "../models/Ingredient.js";

// GET all ingredients
export const getIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.find();

    res.json(ingredients);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE ingredient
export const createIngredient = async (req, res) => {
  try {
    const ingredient = await Ingredient.create(req.body);

    res.json(ingredient);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
