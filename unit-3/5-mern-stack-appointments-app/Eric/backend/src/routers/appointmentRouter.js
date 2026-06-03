import express from "express";

import {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointmentById,
  seedAppointments,
} from "../controllers/appointmentController.js";

const router = express.Router();

router.get("/seed", seedAppointments);
router.get("/", getAllAppointments);
router.get("/:id", getAppointmentById);
router.post("/", createAppointment);
router.put("/:id", updateAppointment);
router.delete("/:id", deleteAppointmentById);

export default router;
