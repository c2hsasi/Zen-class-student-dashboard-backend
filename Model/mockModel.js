import mongoose from "mongoose";

// defining a schema

const mockSchema = new mongoose.Schema({
  interviewDate: {
    type: String,
  },
  interviewerName: {
    type: String,
  },
  interviewRound: {
    type: String,
  },
  attended: {
    type: String,
    default: "Yes",
  },
  comment: {
    type: String,
  },
  logicalScore: {
    type: String,
  },
  overallScore: {
    type: String,
  },
  recordingURL: {
    type: String,
    default: "https://www.google.com/",
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
});

// create a model
export default mongoose.model("Mock", mockSchema, "mocks");
