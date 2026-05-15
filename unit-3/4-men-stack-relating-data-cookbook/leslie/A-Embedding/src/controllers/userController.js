import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";

export const createUser = async (request, response, next) => {
  try {
    const userFound = await UserModel.findOne({ username: request.body.username });
    if (userFound) {
      const error = new Error("User already exists");
      error.status = 409;
      return next(error);
    }

    const hash = await bcrypt.hash(request.body.password, 12);

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
