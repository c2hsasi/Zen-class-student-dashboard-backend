import mongoose from "mongoose";

// defining a schema

const webcodeSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "Make up API",
  },
  submittedOn: {
    type: Date,
    default: Date.now,
  },
  comment: {
    type: String,
    default: "Waiting for review",
  },
  score: {
    type: String,
    default: "Waiting for review",
  },
  status: {
    type: String,
    default: "pending",
  },
  FeUrl: {
    type: String,
    required: [true, "FE URL missing"],
  },
  feCode: {
    type: String,
    required: [true, "FE Code URL missing"],
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
});

// create a model
export default mongoose.model("Webcode", webcodeSchema, "webcodes");
