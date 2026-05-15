import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import { request, response } from "express";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

export const createUser = async (request, response, next) => {
  try {
    const userFound = await UserModel.findOne({ username: request.body.username });
    if (userFound) {
      const error = new Error("User already exists");
      error.status = 409;
      return next(error);
    }

    const peppered = process.env.PASSWORD_PEPPER + request.body.password;
    const hash = await bcrypt.hash(peppered, 12);

    await UserModel.create({
      username: request.body.username,
      hash,
    });

    response.json({ status: "ok", message: "User succesfully created" });
  } catch (error) {
    error.status = 400;
    return next(error);
  }
};

const getAccessTokenConfig = (defaultExpiry = "15m") => ({ expiresIn: defaultExpiry, jwtid: uuidv4() });

export const loginUser = async (request, response, next) => {
  try {
    const userFound = await UserModel.findOne({ username: request.body.username });
    if (!userFound) {
      console.error("User not found");
      const error = new Error("unauthorised");
      error.status = 401;
      return next(error);
    }

    const peppered = process.env.PASSWORD_PEPPER + request.body.password;
    const result = await bcrypt.compare(peppered, userFound.hash);
    if (!result) {
      console.error("Password error");
      const error = new Error("unauthorised");
      error.status = 401;
      return next(error);
    }

    const claims = {
      id: userFound.id,
    };

    const accessToken = jwt.sign(claims, process.env.ACCESS_SECRET, getAccessTokenConfig());
    const refreshToken = jwt.sign(claims, process.env.REFRESH_SECRET, { expiresIn: "30d", jwtid: uuidv4() });

    response.json({ accessToken, refreshToken });
  } catch (error) {
    error.status = 400;
    return next(error);
  }
};

export const refreshAccessToken = async (request, response, next) => {
  try {
    const decoded = jwt.verify(request.body.refreshToken, process.env.REFRESH_SECRET);

    const claims = {
      id: decoded.id,
    };
    const accessToken = jwt.sign(claims, process.env.ACCESS_SECRET, getAccessTokenConfig());

    response.json({ accessToken });
  } catch (error) {
    error.status = 400;
    return next(error);
  }
};
