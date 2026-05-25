import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import connectDB from "./src/db/db.js";
import appointmentRouter from "./src/routers/appointmentRouter.js";

connectDB();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const app = express();
app.use(cors());
app.use(helmet());
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/appointments", appointmentRouter);

const PORT = process.env.PORT || 5010;
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  console.error(err.message);
  console.error(err.stack);

  res.status(err.status || 500).json({
    status: "error",
    msg: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
