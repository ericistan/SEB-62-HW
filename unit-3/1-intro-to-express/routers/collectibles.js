import express from "express";

const router = express.Router();

const collectibles = [
  { name: "shiny ball", price: 5.95 },
  { name: "autographed picture of a dog", price: 10 },
  { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
];

router.get("/:collectibles", (req, res) => {
  const index = req.params.collectibles;
  if (index < 0 || index >= collectibles.length) {
    res.send("This item is not yet in stock. Check back soon!");
  } else {
    const item = collectibles[index];
    res.send(
      `So you want the ${item.name}? For ${item.price}, it can be yours!`,
    );
  }
});

export default router;
