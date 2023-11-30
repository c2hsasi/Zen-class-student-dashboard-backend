import express from "express";
export const studentRouter = express.Router();
import {
  signupStudent,
  updateStudent,
  confirmStudent,
  forgotPassword,
  resetPassword,
} from "../Controllers/student.js";

/*****************sign up new student*********************/

studentRouter.post("/student/signup", signupStudent);

/***************updating student profile*************/

studentRouter.put("/student/update", updateStudent);

/**********confirming/authenticate student account*************/

studentRouter.patch("/student/confirm/:id", confirmStudent);

/***************Creating link for resetting password*************/

studentRouter.put("/student/forgot", forgotPassword);

/*******************resetting password**************************/

studentRouter.patch("/student/reset/:id", resetPassword);


