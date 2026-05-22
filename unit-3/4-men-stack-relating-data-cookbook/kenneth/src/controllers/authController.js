import User from "../models/User.js";

// GET all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// SIGN UP
export const signUp = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.json(user);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// SIGN IN
export const signIn = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    res.json({
      message: "Login successful",
      user,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
