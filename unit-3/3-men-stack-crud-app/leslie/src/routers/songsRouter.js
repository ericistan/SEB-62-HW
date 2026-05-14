import express from "express";
import {
  createSong,
  deleteSongById,
  getSongById,
  getSongs,
  testServer,
  updateSongById,
} from "../controllers/songsController.js";
import { checkSongParamId, checkSongsInput, checkSongsUpdateInput } from "../validators/songsValidator.js";
import { checkErrors } from "../validators/checkErrors.js";

const router = express.Router();

router.get("/test", testServer);
router.put("/songs", checkSongsInput, checkErrors, createSong);
router.get("/songs", getSongs);
router.post("/songs/:id", checkSongParamId, checkErrors, getSongById);
router.patch("/songs/:id", checkSongsUpdateInput, checkErrors, updateSongById);
router.delete("/songs/:id", deleteSongById, checkErrors, updateSongById);

export default router;
