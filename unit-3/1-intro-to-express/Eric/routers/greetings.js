import express from "express";

const router = express.Router();

router.get("/:username", (req, res) => {
  res.send(`Hello there, ${req.params.username}!`);
});

export default router;
