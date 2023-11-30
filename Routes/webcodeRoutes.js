import express from "express";
export const webcodeRouter = express.Router();
import { fetchWebcode, postWebcode } from "../Controllers/webcode.js";

// fetching all webcode
webcodeRouter.get("/student/webcode", fetchWebcode);

// posting new webcode data
webcodeRouter.post("/student/webcode", postWebcode);

