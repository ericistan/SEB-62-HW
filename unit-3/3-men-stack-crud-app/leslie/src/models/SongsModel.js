import mongoose from "mongoose";

const SongsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    artist: { type: String, required: true },
    genre: { type: String, required: true },
    lyrics: { type: String, required: false },
    released: { type: Date, required: true },
  },
  { collection: "songs" },
);

export default mongoose.model("Song", SongsSchema);
