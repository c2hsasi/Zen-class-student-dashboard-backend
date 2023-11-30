import express from "express";
export const leaveRouter = express.Router();
import { fetchLeave, postLeave, deleteLeave } from "../Controllers/leave.js";

// fetching all leave
leaveRouter.get("/student/leave", fetchLeave);

// posting new leave
leaveRouter.post("/student/leave", postLeave);

// deleting leave
leaveRouter.delete("/student/leave/:id", deleteLeave);
