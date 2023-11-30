import express from "express";
export const mockRouter = express.Router();
import { fetchMock, postMock } from "../Controllers/mock.js";

// fetching all mock
mockRouter.get("/student/mock", fetchMock);

// posting new mock
mockRouter.post("/student/mock", postMock);


