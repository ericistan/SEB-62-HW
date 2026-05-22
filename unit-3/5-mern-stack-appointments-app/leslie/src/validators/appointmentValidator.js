import { body } from "express-validator";

const title_notEmpty = body("title", "title cannot be empty").trim().notEmpty();

const title_isLength = body("title", "title must be between 1 and 50 characters").isLength({ min: 1, max: 50 });

const type_notEmpty = body("type", "type cannot be empty").trim().notEmpty();

const type_isLength = body("type", "type must be between 1 and 20 characters").isLength({ min: 1, max: 20 });

const purpose_isLength = body("purpose", "purpose must not exceed 50 characters").optional().isLength({ max: 50 });

const venue_isLength = body("venue", "venue must not exceed 50 characters").optional().isLength({ max: 50 });

const attendees_isLength = body("attendees", "attendees must not exceed 500 characters")
  .optional()
  .isLength({ max: 500 });

const address_isLength = body("address", "address must not exceed 100 characters").optional().isLength({ max: 100 });

const dateTime_isISO8601Date = body("dateTime", "date must be in ISO 8601 format").optional().isISO8601();

const notes_isLength = body("notes", "notes must not exceed 500 characters").optional().isLength({ max: 500 });

export const checkCreateAppointment = [
  title_notEmpty,
  title_isLength,
  type_notEmpty,
  type_isLength,
  purpose_isLength,
  venue_isLength,
  attendees_isLength,
  address_isLength,
  dateTime_isISO8601Date,
];
