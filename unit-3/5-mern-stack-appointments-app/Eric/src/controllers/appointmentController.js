import Appointment from "../models/AppointmentSchema.js";

export const seedAppointments = async (req, res) => {
  try {
    await Appointment.deleteMany({});
    await Appointment.insertMany([
      {
        title: "Meeting with John",
        type: "Business",
        purpose: "Discuss project updates",
        company: "Tech Solutions",
        person: "John Doe",
        address: "123 Main St, Cityville",
        date: "2024-07-01",
        time: "10:00 AM",
        comments: "Bring project reports",
      },
      {
        title: "Doctor's Appointment",
        type: "Medical",
        purpose: "Annual check-up",
        company: "Health Clinic",
        person: "Dr. Smith",
        address: "456 Health Ave, Medictown",
        date: "2024-07-02",
        time: "2:30 PM",
        comments: "Fasting required",
      },
    ]);
    res.json({ status: "ok", msg: "seeding successful" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "seeding error" });
  }
};

export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({});
    res.json(appointments);
  } catch (error) {
    console.error(error.message);
    res
      .status(400)
      .json({ status: "error", msg: "could not retrieve appointments" });
  }
};

export const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    res.json(appointment);
  } catch (error) {
    console.error(error.message);
    res
      .status(400)
      .json({ status: "error", msg: "could not retrieve appointment" });
  }
};

export const createAppointment = async (req, res) => {
  try {
    await Appointment.create({
      title: req.body.title,
      type: req.body.type,
      purpose: req.body.purpose,
      company: req.body.company,
      person: req.body.person,
      address: req.body.address,
      date: req.body.date,
      time: req.body.time,
      comments: req.body.comments,
    });
    res.json({ status: "ok", msg: "appointment created" });
  } catch (error) {
    console.error(error.message);
    res
      .status(400)
      .json({ status: "error", msg: "could not create appointment" });
  }
};

export const updateAppointment = async (req, res) => {
  try {
    const updateAppointment = {};
    if ("title" in req.body) updateAppointment.title = req.body.title;
    if ("type" in req.body) updateAppointment.type = req.body.type;
    if ("purpose" in req.body) updateAppointment.purpose = req.body.purpose;
    if ("company" in req.body) updateAppointment.company = req.body.company;
    if ("person" in req.body) updateAppointment.person = req.body.person;
    if ("address" in req.body) updateAppointment.address = req.body.address;
    if ("date" in req.body) updateAppointment.date = req.body.date;
    if ("time" in req.body) updateAppointment.time = req.body.time;
    if ("comments" in req.body) updateAppointment.comments = req.body.comments;

    const response = await Appointment.findByIdAndUpdate(
      req.params.id,
      updateAppointment,
    );

    if (response === null) {
      res.status(404).json({ status: "error", msg: "appointment not found" });
    } else {
      res.json({ status: "ok", msg: "appointment updated" });
    }
  } catch (error) {
    console.error(error.message);
    res
      .status(400)
      .json({ status: "error", msg: "could not update appointment" });
  }
};

export const deleteAppointmentById = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ status: "ok", msg: "appointment deleted" });
  } catch (error) {
    console.error(error.message);
    res
      .status(400)
      .json({ status: "error", msg: "could not delete appointment" });
  }
};
