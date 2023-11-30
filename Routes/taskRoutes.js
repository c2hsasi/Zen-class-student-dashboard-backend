import express from "express";
export const taskRouter = express.Router();
import {
  fetchTask,
  postTask,
  fetchAllTask,
  updateTaskScore,
} from "../Controllers/task.js";

// fetching all task
taskRouter.get("/student/task", fetchTask);

// posting new task
taskRouter.post("/student/task", postTask);

// fetching All new task
taskRouter.get("/student/alltask", fetchAllTask);

// fetching All new task
taskRouter.patch("/student/task/evaluation", updateTaskScore);

