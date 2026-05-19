const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controller/auth.js");

router.put("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
