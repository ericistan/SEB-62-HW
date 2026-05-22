import AppointmentModel from "../models/AppointmentModel.js";
import UserModel from "../models/UserModel.js";
import { getError, setError } from "../utils/appUtils.js";

export const createAppointment = async (req, res, next) => {
  try {
    const userFound = await UserModel.findById(req.decoded.user_id);
    if (!userFound) {
      return next(getError(401, "unauthorised request", "user not found"));
    }

    const newAppointment = await AppointmentModel.create({
      user_id: userFound._id,
      title: req.body.title,
      type: req.body.type,
      purpose: req.body.purpose,
      venue: req.body.venue,
      attendees: req.body.attendees,
      address: req.body.address,
      dateTime: req.body.dateTime,
      notes: req.body.notes,
    });

    userFound.appointments.push(newAppointment._id);
    await userFound.save();

    res.json("appointment created");
  } catch (error) {
    return next(setError(error, 400));
  }
};

export const getAppointments = async (req, res, next) => {
  try {
    const userFound = await UserModel.findById(req.decoded.user_id).populate({
      path: "appointments",
      select: { title: 1, type: 1, dateTime: 1, created_at: 1 },
    });
    if (!userFound) {
      return next(getError(401, "unauthorised request", "user not found"));
    }

    res.json(userFound.appointments);
  } catch (error) {
    return next(setError(error, 400));
  }
};

export const getAppointmentById = async (req, res, next) => {
  try {
    const appointmentFound = await AppointmentModel.findById(req.body.appointment_id).select({ created_at: 0, __v: 0 });
    if (!appointmentFound || !appointmentFound.user_id.equals(req.decoded.user_id)) {
      return next(
        getError(
          401,
          "unauthorised request",
          !appointmentFound ? "appointment not found" : "appointment found does not belong to current user",
        ),
      );
    }

    res.json(appointmentFound);
  } catch (error) {
    return next(setError(error, 400));
  }
};

export const updateAppointmentById = async (req, res, next) => {
  try {
    const appointmentFound = await AppointmentModel.findById(req.body.appointment_id);
    if (!appointmentFound || !appointmentFound.user_id.equals(req.decoded.user_id)) {
      return next(
        getError(
          401,
          "unauthorised request",
          !appointmentFound ? "appointment not found" : "appointment found does not belong to current user",
        ),
      );
    }

    if (req.body.title) appointmentFound.title = req.body.title;
    if (req.body.type) appointmentFound.type = req.body.type;
    if (req.body.purpose) appointmentFound.purpose = req.body.purpose;
    if (req.body.venue) appointmentFound.venue = req.body.venue;
    if (req.body.attendees) appointmentFound.attendees = req.body.attendees;
    if (req.body.address) appointmentFound.address = req.body.address;
    if (req.body.dateTime) appointmentFound.dateTime = req.body.dateTime;
    if (req.body.notes) appointmentFound.notes = req.body.notes;
    await appointmentFound.save();

    res.json("appointment updated");
  } catch (error) {
    return next(setError(error, 400));
  }
};
