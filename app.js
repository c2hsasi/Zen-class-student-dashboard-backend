import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { URL } from "./utils/config.js";

// Getting all routers

import { loginRouter } from "./Routes/loginRoutes.js";
import { mockRouter } from "./Routes/mockRoutes.js";
import { studentRouter } from "./Routes/studentRoutes.js";
import { queryRouter } from "./Routes/queryRoutes.js";
import { portfolioRouter } from "./Routes/portfolioRoutes.js";
import { leaveRouter } from "./Routes/leaveRoutes.js";
import { capstoneRouter } from "./Routes/capstoneRoutes.js";
import { webcodeRouter } from "./Routes/webcodeRoutes.js";
import { taskRouter } from "./Routes/taskRoutes.js";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false);

mongoose
  .connect(URL)
  .then(() => {
    console.log("connected to Mongo DB");
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/", (req, res) => {
  res.send("Welcome to Zen Class-Dashboard");
});

app.use(studentRouter);
app.use(taskRouter);
app.use(loginRouter);
app.use(leaveRouter);
app.use(portfolioRouter);
app.use(capstoneRouter);
app.use(webcodeRouter);
app.use(queryRouter);
app.use(mockRouter);

export default app;
