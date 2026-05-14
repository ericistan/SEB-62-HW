import express from "express";
import { createSong, getSongById, getSongs, testServer, updateSongById } from "../controllers/songsController.js";
import { checkSongsInput } from "../validators/songsValidator.js";
import { checkErrors } from "../validators/checkErrors.js";

const router = express.Router();

router.get("/test", testServer);
router.put("/songs", checkSongsInput, checkErrors, createSong);
router.get("/songs", getSongs);
router.post("/songs/:id", getSongById);
router.patch("/songs/:id", updateSongById);

export default router;
