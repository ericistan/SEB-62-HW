const express = require("express");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
const connectDB = require("./src/db/db.js");
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the cookbook app!");
});

// Routers
const authRouter = require("./src/router/auth.js");
const foodsRouter = require("./src/router/foods.js");
const isSignedIn = require("./src/middlewear/isSignedIn.js");

app.use("/auth", authRouter);
app.use(isSignedIn); // this checks if user is signed in before allowing access to food routes
app.use("/users", foodsRouter);

const PORT = process.env.PORT || 5010;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
