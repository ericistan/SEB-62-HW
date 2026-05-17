import { body, param } from "express-validator";

export const checkCreateRecipeInputs = [
  body("name").notEmpty().withMessage("Name is required"),
  body("owner").isMongoId().withMessage("Owner id must be a valid mongoID"),
  body("ingredients.*").isMongoId().withMessage("Ingredient id must be a valid mongoId"),
];

export const checkGetRecipeById = [param("recipeId").notEmpty().withMessage("Recipe id is required")];
