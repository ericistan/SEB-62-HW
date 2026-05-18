import express from "express";
import * as foods from "../controllers/foods.js";

// mergeParams allows parent mount params to be passed to child router params
const foodRouter = express.Router({ mergeParams: true });

foodRouter.get("/", foods.readAllFoodFromUser);
foodRouter.put("/", foods.createFoodForUser);
foodRouter.post("/:itemId", foods.postFoodForUser);
foodRouter.patch("/:itemId", foods.updateFoodForUser);
foodRouter.delete("/:itemId", foods.deleteFoodForUser);

export default foodRouter;
