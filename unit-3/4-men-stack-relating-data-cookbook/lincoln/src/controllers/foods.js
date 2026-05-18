import Users from "../models/Users.js";

export const createFoodForUser = async (req, res) => {
  const user = await Users.findById(req.params.userId);
  if (!user) return res.status(404).json({ msg: "user not found" });
  const food = { foodName: req.body.name };
  user.pantry.push(food);
  const response = await user.save();
  res.json({
    status: "ok",
    msg: `user ${user.username} added [${food.foodName}]`,
    content: { response },
  });
};

export const readAllFoodFromUser = async (req, res) => {
  const user = await Users.findById(req.params.userId);
  if (!user) return res.status(404).json({ msg: "user not found" });
  res.json({ user: user.username, pantry: user.pantry });
};

export const updateFoodForUser = async (req, res) => {
  const user = await Users.findById(req.params.userId);
  if (!user) return res.status(404).json({ msg: "user not found" });
  const food = user.pantry.id(req.params.itemId);
  if (!food) return res.status(404).json({ msg: "food not found" });
  food.foodName = req.body.name;
  await user.save();
  res.json({ status: "ok", msg: "food updated", content: food });
};

export const deleteFoodForUser = async (req, res) => {
  const user = await Users.findById(req.params.userId);
  if (!user) return res.status(404).json({ msg: "user not found" });
  user.pantry.pull(req.params.itemId);
  await user.save();
  res.json({ status: "ok", msg: "food deleted", content: user.pantry });
};

export const postFoodForUser = async (req, res) => {
  const user = await Users.findById(req.params.userId);
  if (!user) return res.status(404).json({ msg: "user not found" });
  const food = user.pantry.id(req.params.itemId);
  res.json({ user: user.username, name: food });
};
