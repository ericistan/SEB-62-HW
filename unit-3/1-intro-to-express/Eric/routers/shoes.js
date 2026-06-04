import express from "express";

const router = express.Router();

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" },
];

router.get("/:shoes", (req, res) => {
  let filtered = shoes;

  if (req.query.type) {
    filtered = shoes.filter((shoe) => shoe.type === req.query.type);
  }

  if (req.query["min-price"]) {
    filtered = filtered.filter(
      (shoe) => shoe.price >= parseInt(req.query["min-price"]),
    );
  }

  if (req.query["max-price"]) {
    filtered = filtered.filter(
      (shoe) => shoe.price <= parseInt(req.query["max-price"]),
    );
  }

  res.send(filtered);
});

export default router;
