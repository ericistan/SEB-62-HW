import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true },
    purpose: { type: String, required: true },
    company: { type: String, required: true },
    person: { type: String, required: true },
    address: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    comments: { type: String },
    created_at: { type: Date, default: Date.now },
  },
  { collection: "appointments" },
);

export default mongoose.model("Appointment", appointmentSchema);
