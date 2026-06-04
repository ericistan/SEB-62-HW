import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

export default mongoose.model("Customer", customerSchema);
