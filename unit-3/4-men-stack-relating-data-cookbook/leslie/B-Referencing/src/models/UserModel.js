import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    hash: { type: String, required: true },
  },
  { collection: "usersRef" },
);

export default mongoose.model("User", UserSchema);
