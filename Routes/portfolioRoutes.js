import express from "express";
export const portfolioRouter = express.Router();
import { fetchPortfolio, postPortfolio } from "../Controllers/portfolio.js";

// fetching all portfolio
portfolioRouter.get("/student/portfolio", fetchPortfolio);

// posting new portfolio data
portfolioRouter.post("/student/portfolio", postPortfolio);


