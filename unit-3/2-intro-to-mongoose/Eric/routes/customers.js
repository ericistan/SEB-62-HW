const express = require("express");
const mongoose = require("mongoose");
const Customer = require("../models/customer");

const router = express.Router();

//create
router.put("/", async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//read all
router.get("/", async (req, res) => {
  try {
    const customer = await Customer.find();
    res.json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//read one
router.post("/", async (req, res) => {
  try {
    const customer = await Customer.findById(req.body.id);
    res.json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//update
router.patch("/", async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.body.id, req.body, {
      new: true,
    });
    res.json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//delete
router.delete("/", async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.body.id);
    res.json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
