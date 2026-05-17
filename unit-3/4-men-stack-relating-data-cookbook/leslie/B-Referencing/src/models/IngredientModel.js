import mongoose from "mongoose";

const IngredientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { collation: "ingredientsRef" },
);

export default mongoose.model("Ingredient", IngredientSchema);
