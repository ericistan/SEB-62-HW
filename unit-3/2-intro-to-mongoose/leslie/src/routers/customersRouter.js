import express from "express";
import { createCustomer, getCustomers, seedCustomers } from "../controllers/customersController.js";

const router = express.Router();

router.put("/seeds", seedCustomers);
router.get("/customers", getCustomers);
router.put("/customers", createCustomer);

export default router;
