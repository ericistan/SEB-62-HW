import express from "express";
import {
  createAppointment,
  deleteAppointmentById,
  getAppointmentById,
  getAppointments,
  updateAppointmentById,
} from "../controllers/appointmentController.js";
import {
  appointment_id_mongoId,
  checkCreateAppointment,
  checkUpdateAppointment,
} from "../validators/appointmentValidator.js";
import { checkErrors } from "../validators/checkErrors.js";
import { isSignedIn } from "../middleware/authMiddleware.js";

const router = express.Router();

router.put("/", isSignedIn, checkCreateAppointment, checkErrors, createAppointment);
router.get("/", isSignedIn, getAppointments);
router.post("/", isSignedIn, appointment_id_mongoId, checkErrors, getAppointmentById);
router.patch("/", isSignedIn, checkUpdateAppointment, checkErrors, updateAppointmentById);
router.delete("/", isSignedIn, appointment_id_mongoId, checkErrors, deleteAppointmentById);

export default router;
