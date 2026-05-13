import express from "express";
import connectDB from "./src/db/db.js";
import dotenv from "dotenv";
import {
  createCustomers,
  deleteCustomers,
  readCustomers,
  readOneCustomer,
  updateCustomers,
} from "./src/controller/customers.js";
dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((err, req, res, next) => {
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

  next(err);
});

app.get("/customers", readCustomers);
app.put("/customers", createCustomers);
app.patch("/customers/:id", updateCustomers);
app.delete("/customers/:id", deleteCustomers);
app.post("/customers/:id", readOneCustomer);

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  console.error(err.message);
  console.error(err.stack);

  res.status(err.status || 500).json({
    status: "error",
    msg: err.message,
  });
});

app.listen(process.env.PORT);
