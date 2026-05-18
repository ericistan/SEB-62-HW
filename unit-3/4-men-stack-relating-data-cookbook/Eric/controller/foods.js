const User = require("../models/User.js");

//finds user and returns pantry array
exports.indexFoods = async (req, res) => {
  try {
    console.log("Looking for user with ID:", req.params.userId);
    const user = await User.findById(req.params.userId);
    console.log("User found:", user);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user.pantry); // Return the pantry array
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//create food item in pantry
exports.createFood = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    user.pantry.push(req.body);
    await user.save();
    res.json(user.pantry[user.pantry.length - 1]); // Return the newly added food item
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//show specific food in pantry
exports.showFood = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const foodItem = user.pantry.id(req.params.itemId);
    res.json(foodItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//patch food item in pantry
exports.updateFood = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const foodItem = user.pantry.id(req.params.itemId);
    Object.assign(foodItem, req.body); //
    await user.save();
    res.json(foodItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//delete food item in pantry
exports.deleteFood = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const foodItem = user.pantry.id(req.params.itemId);
    foodItem.deleteOne();
    await user.save();
    res.json(foodItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
