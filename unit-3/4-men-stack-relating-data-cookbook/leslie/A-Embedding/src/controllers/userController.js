import UserModel from "../models/UserModel.js";
import { getError, setError } from "../utils/appUtils.js";

export const getAllFoodsByUserId = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.userid);
    if (!user) {
      console.error("User not found");
      return next(getError(401, "User not found"));
    }

    res.json(user.pantry);
  } catch (error) {
    return next(setError(error, 400));
  }
};

export const createFoodsByUserId = async (req, res, next) => {
  try {
    if (req.params.userid !== req.decoded.userid) {
      console.error("Unable to create foods for another user");
      return next(getError(403, "Unable to create foods for another user"));
    }

    const user = await UserModel.findById(req.params.userid);
    if (!user) {
      console.error("User not found");
      return next(getError(401, "User not found"));
    }

    let newFoodsCount = 0;
    for (const { name } of req.body.foods) {
      if (!user.pantry.some((food) => food.name === name)) {
        user.pantry.push({ name });
        newFoodsCount++;
      }
    }

    await user.save();

    res.json({ status: "ok", message: `${newFoodsCount} new ${newFoodsCount > 1 ? "foods" : "food"} added` });
  } catch (error) {
    return next(setError(error, 400));
  }
};

export const getFoodByUserIdAndFoodId = async (req, res, next) => {};
