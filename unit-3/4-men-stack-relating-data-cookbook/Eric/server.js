const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

mongoose.connection.on("error", (err) => {
  console.log(err.message);
});

app.get("/", (req, res) => {
  res.send("Welcome to the cookbook app!");
});

const authRouter = require("./router/auth.js");
const foodsRouter = require("./router/foods.js");
const isSignedIn = require("./middlewear/isSignedIn.js");

app.use("/auth", authRouter);
app.use(isSignedIn); // this checks if user is signed in before allowing access to food routes
app.use("/users", foodsRouter);

const PORT = process.env.PORT || 5010;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
