import { body, param } from "express-validator";

export const checkSongsInput = [
  body("name", "name is required and cannot be empty").exists().trim().notEmpty(),
  body("artist", "artist is required").exists().trim().notEmpty(),
  body("genre", "genre is required").exists().trim().notEmpty(),
  body("released", "invalid date format").exists().isDate(),
];

export const checkSongsUpdateInput = [
  param("id", "id is required").exists().isMongoId(),
  body("released", "invalid date format").optional().isDate(),
];

export const checkSongParamId = [param("id", "id is required").exists().isMongoId()];
