require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json()); //middlewear

mongoose.connect(process.env.MONGODB_URI); //connect to mongoose database

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

const customersRouter = require("./routes/customers");
app.use("/customers", customersRouter);

//start server
const PORT = 5010;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
