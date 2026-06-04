import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    purpose: String,

    company: String,

    person: String,

    address: String,

    datetime: {
      type: Date,
      required: true,
    },

    comments: String,
  },
  {
    timestamps: true,
  },
);

const AppointmentModel = mongoose.model("Appointment", appointmentSchema);

export default AppointmentModel;
