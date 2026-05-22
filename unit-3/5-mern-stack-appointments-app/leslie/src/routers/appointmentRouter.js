import express from "express";
import { createAppointment, getAppointments } from "../controllers/appointmentController.js";
import { checkCreateAppointment } from "../validators/appointmentValidator.js";
import { checkErrors } from "../validators/checkErrors.js";
import { isSignedIn } from "../middleware/authMiddleware.js";

const router = express.Router();

router.put("/", isSignedIn, checkCreateAppointment, checkErrors, createAppointment);
router.get("/", isSignedIn, getAppointments);

export default router;
