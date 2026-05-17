import { body } from "express-validator";

export const checkCreateIngredientInputs = [body("name").notEmpty().withMessage("Name is required")];
