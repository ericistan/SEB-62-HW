import Coin from "../models/CoinModel.js";

// GET all coins
export const getCoins = async (req, res) => {
  try {
    const coins = await Coin.find();

    res.json(coins);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// GET single coin
export const getCoinById = async (req, res) => {
  try {
    const coin = await Coin.findById(req.params.id);

    res.json(coin);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// CREATE coin
export const createCoin = async (req, res) => {
  try {
    const newCoin = await Coin.create(req.body);

    res.json(newCoin);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// UPDATE coin
export const updateCoin = async (req, res) => {
  try {
    const updatedCoin = await Coin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json(updatedCoin);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// DELETE coin
export const deleteCoin = async (req, res) => {
  try {
    const deletedCoin = await Coin.findByIdAndDelete(req.params.id);

    res.json({
      message: "Coin deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
