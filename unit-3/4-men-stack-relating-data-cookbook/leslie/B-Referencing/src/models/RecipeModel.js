import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    instructions: { type: String },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" }],
  },
  { collection: "recipesRef" },
);

export default mongoose.model("Recipe", RecipeSchema);
