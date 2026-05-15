import express from "express";

import {
  getCoins,
  getCoinById,
  createCoin,
  updateCoin,
  deleteCoin,
} from "../controllers/coinController.js";

const router = express.Router();

// GET all
router.get("/", getCoins);

// GET one
router.get("/:id", getCoinById);

// CREATE
router.post("/", createCoin);

// UPDATE
router.patch("/:id", updateCoin);

// DELETE
router.delete("/:id", deleteCoin);

export default router;
