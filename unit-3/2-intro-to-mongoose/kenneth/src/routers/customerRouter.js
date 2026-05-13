import express from "express";
import validateCustomer from "../validators/customerValidator.js";
import {
  createCustomer,
  deleteCustomer,
  getCustomers,
  updateCustomer,
} from "../controllers/customerController.js";

const router = express.Router();

router.get("/", getCustomers);
router.post("/", validateCustomer, createCustomer);
router.patch("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

export default router;
