import { body } from "express-validator";

export const checkCreateUserInputs = [
  body("username")
    .exists()
    .withMessage("username is required")
    .isAlphanumeric()
    .withMessage("username can only contain alphanumeric characters")
    .isLength({ min: 1, max: 20 })
    .withMessage("username must be between 1 to 20 characters"),
  body("password")
    .exists()
    .withMessage("password is required")
    .isLength({ min: 8, max: 64 })
    .withMessage("passwords must be between 8 and 64 characters"),
];

export const checkLoginInputs = [
  body("username").exists().withMessage("username is required"),
  body("password").exists().withMessage("password is required"),
];

export const checkRefreshAccessInputs = [body("refreshToken").exists().withMessage("refreshToken is required")];
