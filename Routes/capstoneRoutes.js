import express from "express";
export const capstoneRouter = express.Router();
import { fetchCapstone, postCapstone } from "../Controllers/capstone.js";

// fetching all capstone
capstoneRouter.get("/student/capstone", fetchCapstone);

// posting new capstone data
capstoneRouter.post("/student/capstone", postCapstone);
