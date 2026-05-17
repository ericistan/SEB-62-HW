import { body, param } from "express-validator";

export const checkCreateRecipeInputs = [
  body("name").notEmpty().withMessage("Name is required"),
  body("owner").notEmpty().withMessage("Owner is required"),
];

export const checkGetRecipeById = [param("recipeId").notEmpty().withMessage("recipeId is required")];
