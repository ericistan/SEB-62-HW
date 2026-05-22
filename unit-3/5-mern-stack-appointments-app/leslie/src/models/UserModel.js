import mongoose from "mongoose";

const UserModel = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password_hash: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
  },
  { collection: "users" },
);

export default mongoose.model("User", UserModel);
