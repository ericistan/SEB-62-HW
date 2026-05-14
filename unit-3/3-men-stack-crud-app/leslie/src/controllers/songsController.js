import SongsModel from "../models/SongsModel.js";

export const testServer = async (req, res, next) => {
  try {
    await SongsModel.find();
    res.json({ status: "ok", message: "test connection successful" });
  } catch (error) {
    error.status = 400;
    error.message = "test connection error";
    return next(error);
  }
};

export const createSong = async (req, res, next) => {
  try {
    const songFound = await SongsModel.findOne({
      name: req.body.name,
      artist: req.body.artist,
      released: req.body.released,
    });
    if (songFound) {
      return res.json({ status: "error", message: "song already exists" });
    }

    await SongsModel.create({
      name: req.body.name,
      artist: req.body.artist,
      genre: req.body.genre,
      lyrics: req.body.lyrics,
      released: req.body.released,
    });

    res.json({ status: "ok", message: "song added successfully" });
  } catch (error) {
    error.status = 400;
    return next(error);
  }
};

export const getSongs = async (req, res, next) => {
  try {
    const songs = await SongsModel.find();
    res.json(songs);
  } catch (error) {
    error.status = 400;
    return next(error);
  }
};

export const getSongById = async (req, res, next) => {
  try {
    const song = await SongsModel.findById(req.params.id);
    res.json(song);
  } catch (error) {
    error.status = 400;
    return next(error);
  }
};

export const updateSongById = async (req, res, next) => {
  try {
    await SongsModel.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      artist: req.body.artist,
      genre: req.body.genre,
      lyrics: req.body.lyrics,
      released: req.body.released,
    });

    res.json({ status: "ok", message: "song successfully updated" });
  } catch (error) {
    error.status = 400;
    return next(error);
  }
};
