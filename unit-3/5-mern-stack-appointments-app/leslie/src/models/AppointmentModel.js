import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true },
    purpose: { type: String, default: "" },
    venue: { type: String, default: "" },
    attendees: { type: String, default: "" },
    address: { type: String, default: "" },
    dateTime: { type: Date },
    notes: { type: String, default: "" },
    created_at: { type: Date, default: Date.now },
  },
  { collection: "appointments" },
);

export default mongoose.model("Appointment", AppointmentSchema);
