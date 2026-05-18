const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const hash = await bcrypt.hash(req.body.password, 12);

    await User.create({
      username: req.body.username,
      password: hash,
    });

    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const result = await bcrypt.compare(req.body.password, user.password);
    if (!result) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ message: "Sign in successful", userId: user._id, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
