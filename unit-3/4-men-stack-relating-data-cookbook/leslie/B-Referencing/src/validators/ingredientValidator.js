import { body, param } from "express-validator";

export const checkCreateIngredientInputs = [body("name").notEmpty().withMessage("Name is required")];

export const checkGetIngredientByIdInputs = [param("ingredientId").notEmpty().withMessage("Ingredient id is required")];

export const checkUpdateIngredientByIdInputs = [
  param("ingredientId").notEmpty().withMessage("Ingredient id is required"),
  body("name").notEmpty().withMessage("Name is required"),
];
