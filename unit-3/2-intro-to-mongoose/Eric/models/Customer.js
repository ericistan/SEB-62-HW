const mongoose = require("mongoose");

//Schema
const customerSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model("customer", customerSchema);
