import AppointmentModel from "../models/Appointment.js";

export const createAppointment = async (req, res) => {
  try {
    const appointment = await AppointmentModel.create(req.body);

    res.json(appointment);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAppointments = async (req, res) => {
  try {
    const appointments = await AppointmentModel.find();

    res.json(appointments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateAppointment = async (req, res) => {
  try {
    const appointment = await AppointmentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        returnDocument: "after",
      },
    );

    res.json(appointment);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteAppointment = async (req, res) => {
  try {
    await AppointmentModel.findByIdAndDelete(req.params.id);

    res.json({
      message: "Appointment deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
