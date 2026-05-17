import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { getError, setError } from "../utils/appUtils.js";

export const createUser = async (req, res, next) => {
  try {
    const userFound = await UserModel.findOne({ username: req.body.username });
    if (userFound) {
      return next(getError("409", "User already exists"));
    }

    const peppered = process.env.PASSWORD_PEPPER + req.body.password;
    const hash = await bcrypt.hash(peppered, 12);

    await UserModel.create({
      username: req.body.username,
      hash,
    });

    res.json({ status: "ok", message: "User succesfully created" });
  } catch (error) {
    return next(setError(error, "400"));
  }
};

const getAccessTokenConfig = (defaultExpiry = "15m") => ({ expiresIn: defaultExpiry, jwtid: uuidv4() });

export const loginUser = async (req, res, next) => {
  try {
    const userFound = await UserModel.findOne({ username: req.body.username });
    if (!userFound) {
      console.error("User not found");
      return next(getError("401", "unauthorised"));
    }

    const peppered = process.env.PASSWORD_PEPPER + req.body.password;
    const result = await bcrypt.compare(peppered, userFound.hash);
    if (!result) {
      console.error("Password error");
      return next(getError("401", "unauthorised"));
    }

    const claims = {
      userId: userFound._id,
    };

    const accessToken = jwt.sign(claims, process.env.ACCESS_SECRET, getAccessTokenConfig());
    const refreshToken = jwt.sign(claims, process.env.REFRESH_SECRET, { expiresIn: "30d", jwtid: uuidv4() });

    res.json({ accessToken, refreshToken });
  } catch (error) {
    return next(setError(error, "400"));
  }
};

export const refreshAccessToken = async (req, res, next) => {
  try {
    const decoded = jwt.verify(req.body.refreshToken, process.env.REFRESH_SECRET);

    const claims = {
      userId: decoded.userId,
    };
    const accessToken = jwt.sign(claims, process.env.ACCESS_SECRET, getAccessTokenConfig());

    res.json({ accessToken });
  } catch (error) {
    return next(setError(error, "400"));
  }
};
