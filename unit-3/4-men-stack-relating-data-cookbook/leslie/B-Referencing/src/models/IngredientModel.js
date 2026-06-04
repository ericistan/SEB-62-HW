import mongoose from "mongoose";

const IngredientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { collection: "ingredientsRef" },
);

export default mongoose.model("Ingredient", IngredientSchema);
