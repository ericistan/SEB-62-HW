import express from "express";
import { createAppointment } from "../controllers/appointmentController.js";
import { checkCreateAppointment } from "../validators/appointmentValidator.js";
import { checkErrors } from "../validators/checkErrors.js";

const router = express.Router();

router.put("/", checkCreateAppointment, checkErrors, createAppointment);

export default router;
