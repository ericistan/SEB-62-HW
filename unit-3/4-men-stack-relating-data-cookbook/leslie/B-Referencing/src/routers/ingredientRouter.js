import express from "express";
import { isAuth } from "../middleware/authMiddleware.js";
import {
  createIngredient,
  deleteIngredientById,
  getIngredientById,
  getIngredients,
  updateIngredientById,
} from "../controllers/ingredientController.js";
import {
  checkCreateIngredientInputs,
  checkDeleteIngredientByIdInputs,
  checkGetIngredientByIdInputs,
  checkUpdateIngredientByIdInputs,
} from "../validators/ingredientValidator.js";
import { checkErrors } from "../validators/checkErrors.js";

const router = express.Router();

router.get("/ingredients", isAuth, getIngredients);
router.put("/ingredients", isAuth, checkCreateIngredientInputs, checkErrors, createIngredient);
router.post("/ingredients/:ingredientId", isAuth, checkGetIngredientByIdInputs, checkErrors, getIngredientById);
router.patch("/ingredients/:ingredientId", isAuth, checkUpdateIngredientByIdInputs, checkErrors, updateIngredientById);
router.delete("/ingredients/:ingredientId", isAuth, checkDeleteIngredientByIdInputs, checkErrors, deleteIngredientById);

export default router;
