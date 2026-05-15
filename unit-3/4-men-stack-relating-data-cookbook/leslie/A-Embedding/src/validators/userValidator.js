import { body, param } from "express-validator";

export const checkCreateFoodsInputs = [
  param("id").exists().withMessage("user id is required"),
  body("foods").exists().withMessage("foods is required").isArray().withMessage("foods must be an array"),
  body("foods.*.name").notEmpty().withMessage("name of food cannot be empty"),
];
