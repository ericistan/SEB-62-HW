import { body, param } from "express-validator";

export const checkGetAllFoodsInputs = [param("userId").exists().withMessage("userId is required")];

export const checkCreateFoodsInputs = [
  param("userId").isMongoId().withMessage("userId is required"),
  body("foods").exists().withMessage("foods is required").isArray().withMessage("foods must be an array"),
  body("foods.*.name").notEmpty().withMessage("name of food cannot be empty"),
];

export const checkGetFoodByUserIdAndFoodId = [
  param("userId").isMongoId().withMessage("userId is required"),
  param("foodId").isMongoId().withMessage("foodId is required"),
];

export const checkUpdateFoodByUserIdAndFoodId = [
  param("userId").isMongoId().withMessage("userId is required"),
  param("foodId").isMongoId().withMessage("foodId is required"),
  body("name").notEmpty().withMessage("name of food cannot be empty"),
];

export const checkDeleteFoodByUserIdAndFoodId = [
  param("userId").isMongoId().withMessage("userId is required"),
  param("foodId").isMongoId().withMessage("foodId is required"),
];
