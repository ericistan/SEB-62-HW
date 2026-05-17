import { body, param } from "express-validator";

export const checkCreateIngredientInputs = [body("name").notEmpty().withMessage("Name is required")];

export const checkGetIngredientByIdInputs = [param("ingredientId").notEmpty().withMessage("Ingredient id is required")];
