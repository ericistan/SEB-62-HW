import express from "express";
import {
  createFoodsByUserId,
  deleteFoodByUserIdAndFoodId,
  getAllFoodsByUserId,
  getFoodByUserIdAndFoodId,
  updateFoodByUserIdAndFoodId,
} from "../controllers/userController.js";
import { isAuth } from "../middleware/authMiddleware.js";
import {
  checkCreateFoodsInputs,
  checkDeleteFoodByUserIdAndFoodId,
  checkGetAllFoodsInputs,
  checkGetFoodByUserIdAndFoodId,
  checkUpdateFoodByUserIdAndFoodId,
} from "../validators/userValidator.js";
import { checkErrors } from "../validators/checkErrors.js";

const router = express.Router();

router.get("/users/:userId/foods", isAuth, checkGetAllFoodsInputs, checkErrors, getAllFoodsByUserId);
router.put("/users/:userId/foods", isAuth, checkCreateFoodsInputs, checkErrors, createFoodsByUserId);

router.post(
  "/users/:userId/foods/:foodId",
  isAuth,
  checkGetFoodByUserIdAndFoodId,
  checkErrors,
  getFoodByUserIdAndFoodId,
);

router.patch(
  "/users/:userId/foods/:foodId",
  isAuth,
  checkUpdateFoodByUserIdAndFoodId,
  checkErrors,
  updateFoodByUserIdAndFoodId,
);

router.delete(
  "/users/:userId/foods/:foodId",
  isAuth,
  checkDeleteFoodByUserIdAndFoodId,
  checkErrors,
  deleteFoodByUserIdAndFoodId,
);

export default router;
