const express = require("express");
const Book = require("../models/book.js");
const router = express.Router();

// PUT /books = Create a new book
// GET /books/ = Read all books
// POST /books/:id = Read one book by ID
// PATCH /books/:id = Update a book
// DELETE /books/:id = Delete a book

router.put("/", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const book = await Book.find();
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
