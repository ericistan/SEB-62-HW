import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    foodName: { type: String, required: true },
  },
  { collection: "foods" },
);

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    hash: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    pantry: [foodSchema],
  },
  { collection: "users" },
);

export default mongoose.model("User", userSchema);
