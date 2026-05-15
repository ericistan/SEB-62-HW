import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import Users from "../models/Users.js";

// export const createUsers = async (req, res) => {
//   const user = await Users.create({
//     username: req.body.username,
//     password: req.body.password,
//   });
//   res.json({
//     status: "ok",
//     msg: `new User of username [${req.body.username}] created`,
//   });
// };

export const registerUser = async (req, res, next) => {
  try {
    const auth = await Users.findOne({ username: req.body.username });
    if (auth) {
      const errorUsername = new Error("Username already exist");
      errorUsername.status = 400;
      return next(errorUsername);
    }
    const hash = await bcrypt.hash(req.body.password, 12);
    await Users.create({
      username: req.body.username,
      hash,
    });
    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    return next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const auth = await Users.findOne({ username: req.body.username });
    if (!auth) {
      const errorUsername = new Error("Username not found");
      errorUsername.status = 404;
      return next(errorUsername);
    }
    const isMatch = await bcrypt.compare(req.body.password, auth.hash);
    if (!isMatch) {
      const errorPassword = new Error("Incorrect password");
      errorPassword.status = 401;
      return next(errorPassword);
    }
    const payload = { username: auth.username };
    const access = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "15m",
      jwtid: uuidv4(),
    });
    const refresh = jwt.sign(payload, process.env.REFRESH_SECRET, {
      expiresIn: "30d",
      jwtid: uuidv4(),
    });
    res.json({ access, refresh, userId: auth._id, username: auth.username });
  } catch (error) {
    return next(error);
  }
};

export const refreshAccessToken = async (req, res, next) => {
  try {
    // 1. Verify the refresh token and if it is valid, create a new access token.
    const decoded = jwt.verify(req.body.refresh, process.env.REFRESH_SECRET);
    const payload = { username: decoded.username };
    const access = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "15m",
      jwtid: uuidv4(),
    });
    res.json({ access });
  } catch (error) {
    return next(error);
  }
};
