import express from "express";

const router = express.Router();

router.get("/:rollNumber", (req, res) => {
  const rollNumber = req.params.rollNumber;

  if (isNaN(rollNumber) || rollNumber < 1) {
    res.send("You must specify a number.");
  } else {
    const diceRoll = Math.floor(Math.random() * (parseInt(rollNumber) + 1));
    res.send(`You rolled a ${diceRoll}.`);
  }
});

export default router;
