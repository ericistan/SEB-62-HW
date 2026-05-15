INTRODUCTION
In this tutorial, we will create a simple Express server that connects to a MongoDB database using Mongoose. We will set up the project structure, install necessary packages, and create a basic server that can handle requests.

TABLE OF CONTENTS

- PACKAGE INSTALLATION[#package-installation]
- CHANGE PACKAGE.JSON[#change-package-json]
- ENVIRONMENT VARIABLES CREATION[#environment-variables-creation]
- SRC FOLDER CREATE[#src-folder-create]
  - DB FOLDER, DB.JS[#db-folder-dbjs]
  - MODELS FOLDER, SCHEMA.JS[#models-folder-schemajs]
  - CONTROLLERS FOLDER, CONTROLLER.JS[#controllers-folder-controllerjs]
- SERVER.JS[#serverjs]

1. PACKAGE INSTALLATION
   Install the following packages

- npm init -y
- npm i express
- npm i -D nodemon
- npm i dotenv
- npm i mongoose

2. CHANGE PACKAGE.JSON
   Make a few changes to the package.json file:

```js
// add the following
"scripts": {
    "start": "node server",
    "dev": "nodemon server"
  },
// change the following
"type": "module",
"main": "server.js",

```

3. ENVIRONMENT VARIABLES CREATION
   Create a .env file and add the following code:

```env
PORT=5001
MONGODB_URI=mongodb://127.0.0.1:27017/homework
```

4. SRC FOLDER CREATE
   create a src folder with the following folders (models, routes, controllers, middlewares, db)

A. DB FOLDER, DB.JS
Create db folder with db.js file created and add the following line:

```js
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
```

B. MODELS FOLDER, SCHEMA.JS
Create models folder with schema.js file created and add the following line:

```js
import mongoose from "mongoose";

const schemaEmbedded = new mongoose.Schema(
  {
    // Define your schema fields here
  },
  { collections: "collectionNameEmbedded" },
);

const schema = new mongoose.Schema(
  {
    // Define your second schema fields here with the embedded schema
    someField: { schemaEmbedded },
  },
  { collections: "collectionName" },
);

export default mongoose.model("ModelName", schema);
```

C. CONTROLLERS FOLDER, CONTROLLER.JS
Create controllers folder with controller.js file created and add the following line:

```js
import ModelName from "../models/schema.js";

// Define your controller functions here
```

Z. MIDDLEWARES FOLDER, MIDDLEWARE.JS
Create middlewares folder with middleware.js file created.
This is an example of errorhandler.js

```js
// this is to capture json error
export const jsonErrorHandler = (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    console.error("JSON parsing error:", err.message);
    return res.status(400).json({
      status: 400,
      msg: "invalid JSON format",
    });
  } else if (
    err instanceof SyntaxError &&
    err.status === 400 &&
    err.type === "entity.parse.failed"
  ) {
    console.error("URL-encoded parsing error:", err.message);
    return res.status(400).json({
      status: 400,
      msg: "invalid form data format",
    });
  }

  next(err); // if err, this goes to next error middleware (err) instead the api endpoint
};

// this is to capture server error
export const globalErrorHandler = (err, req, res, next) => {
  console.error("Unhandled error:", err);
  console.error(err.message);
  console.error(err.stack);

  res.status(err.status || 500).json({
    status: "error",
    msg: err.message,
  });
};
```

5. SERVER.JS
   Create a file named server.js and add the following code with middleware and routes:

```js
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./src/db/db.js";
import * as controllers from "./src/controllers/controller.js";
import {
  jsonErrorHandler,
  globalErrorHandler,
} from "./src/middlewares/middleware.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json()); // for body parsing application/json
app.use(express.urlencoded({ extended: false })); // true if data is nested

// Define your middlewares here: JSON error handler (before the routes)
app.use(jsonErrorHandler);

// Define your routes here and use the controller functions
app.get("/", controllers.someControllerFunction);
app.post("/some-route", controllers.someOtherControllerFunction);

// Define your global error handler middleware here (after the routes)
app.use(globalErrorHandler);

// Start the server with the PORT defined in the .env file
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
```

6. CREATE JWT
   A. INSTALL PACKAGES

- npm i jsonwebtoken
- npm i bcrypt
- npm i uuid

B. ENV VARIABLES
Add ACCESS_SECRET and REFRESH_SECRET to .env file

C. MODELS FOLDER, USERSCHEMA.JS
Add the following code to schema.js file:

```js
import mongoose from "mongoose";
const authSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    hash: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
  },
  { collection: "auths" },
);

export default mongoose.model("Auth", authSchema);
```

D. CONTROLLERS FOLDER, AUTHCONTROLLER.JS
Create authController.js file in controllers folder and add the following code:

```js
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import UserModel from "../models/userSchema.js";
// Function to register a new user
export const registerUser = async (req, res) => {
  try {
    // 1. Check if the username already exists.
    const auth = await UserModel.findOne({ username: req.body.username });
    if (auth) {
      return res.status(400).json({ msg: "Username already exists" });
    }

    // 2. Hash the password and create the user to the database.
    const hash = await bcrypt.hash(req.body.password, 12);
    await UserModel.create({
      username: req.body.username,
      hash,
    });
    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};
// Function to login a user
export const loginUser = async (req, res, next) => {
  try {
    // 1. Check if the username exists.
    const auth = await UserModel.findOne({ username: req.body.username });
    if (!auth) {
      const error = new Error("Username not found");
      error.status = 404;
      return next(error);
    }
    // 2. Compare the password with the hash in the database.
    const isMatch = await bcrypt.compare(req.body.password, auth.hash);
    if (!isMatch) {
      const error = new Error("Incorrect password");
      error.status = 401;
      return next(error);
    }
    // 3. If the password is correct, create an access token and a refresh token.
    const payload = { username: auth.username };
    const access = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "15m",
      jwtid: uuidv4(),
    });
    const refresh = jwt.sign(payload, process.env.REFRESH_SECRET, {
      expiresIn: "30d",
      jwtid: uuidv4(),
    });
    res.json({ access, refresh });
  } catch (error) {
    const error = new Error(error.message);
    error.status = 500;
    return next(error);
  }
};

export const refreshAccessToken = async (req, res, next) => {
  try {
    // 1. Verify the refresh token and if it is valid, create a new access token.
    const decoded = jwt.verify(req.body.refresh, process.env.REFRESH_SECRET);
    const payload = { username: decoded.username };
    const access = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "15m",
      jwtid: uuidv4(),
    });
    res.json({ access });
  } catch (error) {
    const error = new Error("unable to refresh token");
    error.status = 401;
    return next(error);
  }
};
```
