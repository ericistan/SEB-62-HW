import mongoose from "mongoose";

export const CarSchema = new mongoose.Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    description: { type: String, required: true },
    // image: String,
  },
  { collection: "cars" },
);

export default mongoose.model("Car", CarSchema);
