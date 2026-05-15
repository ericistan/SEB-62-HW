import UserModel from "../models/UserModel.js";
import { request, response } from "express";

export const getAllFoodsByUserId = async (request, response, next) => {
  try {
    const user = await UserModel.findById(request.params.id);
    if (!user) {
      console.error("User not found");
      const error = new Error("unauthorised");
      error.status = 401;
      return next(error);
    }

    response.json(user.pantry);
  } catch (error) {
    error.status = 400;
    return next(error);
  }
};
