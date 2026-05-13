import express from "express";
import greetingsRouter from "./routers/greetings.js";
import collectiblesRouter from "./routers/collectibles.js";
import rollDiceRouter from "./routers/rollDice.js";
import shoesRouter from "./routers/shoes.js";

const app = express();
const PORT = 5010;

app.use("/greetings", greetingsRouter);
app.use("/collectibles", collectiblesRouter);
app.use("/roll", rollDiceRouter);
app.use("/shoes", shoesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
