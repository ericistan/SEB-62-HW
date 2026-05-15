import UserModel from "../models/UserModel.js";
import { getError, setError } from "../utils/appUtils.js";

export const getAllFoodsByUserId = async (request, response, next) => {
  try {
    const user = await UserModel.findById(request.params.id);
    if (!user) {
      console.error("User not found");
      return next(getError(401, "User not found"));
    }

    response.json(user.pantry);
  } catch (error) {
    return next(setError(error, 400));
  }
};

export const createFoodsByUserId = async (request, response, next) => {
  try {
    if (request.params.id !== request.decoded.id) {
      console.error("Unable to create foods for another user");
      return next(getError(403, "Unable to create foods for another user"));
    }

    const user = await UserModel.findById(request.params.id);
    if (!user) {
      console.error("User not found");
      return next(getError(401, "User not found"));
    }

    let newFoodsCount = 0;
    for (const { name } of request.body.foods) {
      if (!user.pantry.some((food) => food.name === name)) {
        user.pantry.push({ name });
        newFoodsCount++;
      }
    }

    await user.save();

    response.json({ status: "ok", message: `${newFoodsCount} new ${newFoodsCount > 1 ? "foods" : "food"} added` });
  } catch (error) {
    return next(setError(error, 400));
  }
};
