import UserModel from "../models/UserModel.js";
import { getError, setError } from "../utils/appUtils.js";

export const getAllFoodsByUserId = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.userId);
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
    if (req.params.userId !== req.decoded.userId) {
      console.error("Unable to create foods for another user");
      return next(getError(403, "Unable to create foods for another user"));
    }

    const user = await UserModel.findById(req.params.userId);
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

export const getFoodByUserIdAndFoodId = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.userId);
    if (!user) {
      console.error("User not found");
      return next(getError(401, "User not found"));
    }

    const food = user.pantry.id(req.params.foodId);
    res.json(food);
  } catch (error) {
    return next(setError(error, 400));
  }
};

export const updateFoodByUserIdAndFoodId = async (req, res, next) => {
  try {
    if (req.params.userId !== req.decoded.userId) {
      console.error("Unable to create foods for another user");
      return next(getError(403, "Unable to create foods for another user"));
    }

    const user = await UserModel.findById(req.params.userId);
    if (!user) {
      console.error("User not found");
      return next(getError(401, "User not found"));
    }

    const food = user.pantry.id(req.params.foodId);
    if (!food) {
      console.error("Food not found");
      return next(getError(401, "Food not found"));
    }

    if (user.pantry.some((food) => food.name === req.body.name)) {
      console.error("Food already exists in user's pantry");
      return next(getError(403, "Food exists"));
    }

    food.name = req.body.name;
    await user.save();

    res.json({ status: "ok", message: "Food updated" });
  } catch (error) {
    return next(setError(error, 400));
  }
};

export const deleteFoodByUserIdAndFoodId = async (req, res, next) => {
  try {
    if (req.params.userId !== req.decoded.userId) {
      console.error("Unable to create foods for another user");
      return next(getError(403, "Unable to create foods for another user"));
    }

    const user = await UserModel.findById(req.params.userId);
    if (!user) {
      console.error("User not found");
      return next(getError(401, "User not found"));
    }

    user.pantry.pull(req.params.foodId);

    await user.save();

    res.json({ status: "ok", message: "Food deleted" });
  } catch (error) {
    return next(setError(error, 400));
  }
};
