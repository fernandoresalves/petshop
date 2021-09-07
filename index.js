import express from "express";
import cors from "cors";
import logger from "./logger.js";
import animalRouter from "./routes/animal.route.js";
import ownerRouter from "./routes/owner.route.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/animal", animalRouter);
app.use("/proprietario", ownerRouter);

app.use((error, req, res, next) => {
  logger.error(`${req.method} - ${req.baseUrl} - ${error.message}`);
  res.status(400).send({ error: error.message });
});

app.listen(3000, () => console.log("⚡️ API started!"));
