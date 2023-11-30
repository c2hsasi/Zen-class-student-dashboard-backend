import express from "express";
export const queryRouter = express.Router();
import { fetchQuery, postQuery, deleteQuery } from "../Controllers/query.js";

// fetching all query
queryRouter.get("/student/query", fetchQuery);

// posting new query
queryRouter.post("/student/query", postQuery);

// deleting query
queryRouter.delete("/student/query/:id", deleteQuery);


