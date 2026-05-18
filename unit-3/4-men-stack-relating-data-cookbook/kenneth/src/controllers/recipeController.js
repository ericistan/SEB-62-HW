import Recipe from "../models/Recipe.js";

// GET all recipes
export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find()
      .populate("owner")
      .populate("ingredients");

    res.json(recipes);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// GET recipe by id
export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id)
      .populate("owner")
      .populate("ingredients");

    if (!recipe) {
      return res.status(400).json({
        message: "Recipe not found",
      });
    }

    res.json(recipe);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// CREATE recipe
export const createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);

    res.json(recipe);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// UPDATE recipe
export const updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedRecipe) {
      return res.status(400).json({
        message: "Recipe not found",
      });
    }

    res.json(updatedRecipe);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// DELETE recipe
export const deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);

    if (!deletedRecipe) {
      return res.status(400).json({
        message: "Recipe not found",
      });
    }

    res.status(200).json({
      message: "Recipe deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// ADD ingredient to recipe
export const addIngredientToRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.recipeId);

    if (!recipe) {
      return res.status(400).json({
        message: "Recipe not found",
      });
    }

    const ingredientId = req.params.ingredientId;

    // prevent duplicate ingredients
    if (
      recipe.ingredients.some(
        (ingredient) => ingredient.toString() === ingredientId,
      )
    ) {
      return res.status(400).json({
        message: "Ingredient already exists",
      });
    }

    recipe.ingredients.push(ingredientId);

    await recipe.save();

    const updatedRecipe = await Recipe.findById(recipe._id)
      .populate("owner", "-password")
      .populate("ingredients");

    res.json(updatedRecipe);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
