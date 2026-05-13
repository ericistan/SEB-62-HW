import express from "express";
import {
  createCustomer,
  deleteCustomer,
  getCustomers,
  patchCustomer,
  postCustomers,
  seedCustomers,
} from "../controllers/customersController.js";

const router = express.Router();

router.put("/seeds", seedCustomers);
router.get("/customers", getCustomers);
router.put("/customers", createCustomer);
router.post("/customers", postCustomers);
router.patch("/customers", patchCustomer);
router.delete("/customers", deleteCustomer);

export default router;
