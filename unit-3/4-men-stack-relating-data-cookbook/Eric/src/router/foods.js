const express = require("express");
const router = express.Router();

const {
  indexFoods,
  createFood,
  showFood,
  updateFood,
  deleteFood,
} = require("../controller/foods.js");

router.get("/:userId/foods", indexFoods);
router.put("/:userId/foods", createFood);
router.post("/:userId/foods/:itemId", showFood);
router.patch("/:userId/foods/:itemId", updateFood);
router.delete("/:userId/foods/:itemId", deleteFood);

module.exports = router;
