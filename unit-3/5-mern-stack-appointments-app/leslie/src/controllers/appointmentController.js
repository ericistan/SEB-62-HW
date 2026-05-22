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
    userFound.save();

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
