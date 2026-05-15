const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  datePublished: { type: Date },
});

module.exports = mongoose.model("book", bookSchema);
