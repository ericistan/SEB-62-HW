import { body, param } from "express-validator";

export const checkGetAllFoodsInputs = [param("userid").exists().withMessage("userid is required")];

export const checkCreateFoodsInputs = [
  param("userid").exists().withMessage("userid is required"),
  body("foods").exists().withMessage("foods is required").isArray().withMessage("foods must be an array"),
  body("foods.*.name").notEmpty().withMessage("name of food cannot be empty"),
];
