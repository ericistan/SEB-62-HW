import { body } from "express-validator";

const username_notEmpty = body("username", "username cannot be empty").trim().notEmpty();

const username_isAlphanumeric = body(
  "username",
  "only alphanumeric characters are allowed in username",
).isAlphanumeric();

const username_isLength = body("username", "username must be between 8 and 32 characters").isLength({
  min: 8,
  max: 32,
});

const password_notEmpty = body("password", "password cannot be empty").trim().notEmpty();

const password_isLength = body("password", "password must be between 8 and 32 characters").isLength({
  min: 8,
  max: 32,
});

export const refreshToken_notEmpty = body("refreshToken", "refreshToken cannot be empty");

export const checkRegistration = [
  username_notEmpty,
  username_isAlphanumeric,
  username_isLength,
  password_notEmpty,
  password_isLength,
];

export const checkLogin = [username_notEmpty, password_notEmpty];
