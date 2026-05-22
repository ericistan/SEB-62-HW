import AppointmentModel from "../models/AppointmentModel.js";
import { setError } from "../utils/appUtils.js";

export const createAppointment = async (req, res, next) => {
  try {
    await AppointmentModel.create({
      title: req.body.title,
      type: req.body.type,
      purpose: req.body.purpose,
      venue: req.body.venue,
      attendees: req.body.attendees,
      address: req.body.address,
      dateTime: req.body.dateTime,
      notes: req.body.notes,
    });

    res.json("appointment created");
  } catch (error) {
    return next(setError(error, 400));
  }
};
