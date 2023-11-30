import express from "express";
export const loginRouter = express.Router();

import { login } from "../Controllers/login.js";

loginRouter.post("/student/login", login);
