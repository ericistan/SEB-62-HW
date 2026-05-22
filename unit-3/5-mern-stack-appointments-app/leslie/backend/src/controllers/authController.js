import UserModel from "../models/UserModel.js";
import { getError, setError } from "../utils/appUtils.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

export const createUser = async (req, res, next) => {
  try {
    const userFound = await UserModel.findOne({ username: req.body.username.toLowerCase() });
    if (userFound) {
      return next(getError(401, "user creation failed", "username already in used"));
    }

    const password_hash = await bcrypt.hash(req.body.password, 12);

    await UserModel.create({
      username: req.body.username.toLowerCase(),
      password_hash,
      created_at: Date.now(),
    });

    res.json("user creation successful");
  } catch (error) {
    return next(setError(error, 400, "user creation failed"));
  }
};

const getAccessTokenConfig = (defaultExpiry = "15m") => ({ expiresIn: defaultExpiry, jwtid: uuidv4() });

export const login = async (req, res, next) => {
  try {
    const userFound = await UserModel.findOne({ username: req.body.username });
    if (!userFound) {
      return next(getError(401, "login failed", "username not found"));
    }

    const isAMatch = await bcrypt.compare(req.body.password, userFound.password_hash);
    if (!isAMatch) {
      return next(getError(401, "login failed", "hashes do not match"));
    }

    const claims = {
      user_id: userFound._id,
    };

    const accessToken = jwt.sign(claims, process.env.ACCESS_SECRET, getAccessTokenConfig());
    const refreshToken = jwt.sign(claims, process.env.REFRESH_SECRET, { expiresIn: "30d", jwtid: uuidv4() });

    res.json({ accessToken, refreshToken });
  } catch (error) {
    return next(setError(error, 400, "login failed"));
  }
};

export const refreshAccessToken = async (req, res, next) => {
  try {
    const decoded = jwt.verify(req.body.refreshToken, process.env.REFRESH_SECRET);

    const claims = {
      user_id: decoded.user_id,
    };
    const accessToken = jwt.sign(claims, process.env.ACCESS_SECRET, getAccessTokenConfig());

    res.json({ accessToken });
  } catch (error) {
    return next(setError(error, 400, "refresh access failed"));
  }
};
