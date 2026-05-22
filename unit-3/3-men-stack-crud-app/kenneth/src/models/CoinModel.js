import mongoose from "mongoose";

const coinSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    symbol: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    marketCap: {
      type: Number,
      default: 0,
    },

    isTrending: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Coin = mongoose.model("Coin", coinSchema);

export default Coin;
