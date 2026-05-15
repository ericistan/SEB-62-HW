import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { collection: "foods" },
);

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    hash: { type: String, required: true },
    pantry: [FoodSchema],
  },
  { collection: "users" },
);

export default mongoose.model("User", UserSchema);
