import express from "express";
import { createCustomer, getCustomers, postCustomers, seedCustomers } from "../controllers/customersController.js";

const router = express.Router();

router.put("/seeds", seedCustomers);
router.get("/customers", getCustomers);
router.put("/customers", createCustomer);
router.post("/customers", postCustomers);

export default router;
