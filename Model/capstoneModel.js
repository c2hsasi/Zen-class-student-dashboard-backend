import mongoose from "mongoose";

// defining a schema

const capstoneSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "Zen class student dashboard",
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
    default: "submitted",
  },
  FeUrl: {
    type: String,
    required: [true, "FE URL missing"],
  },
  beUrl: {
    type: String,
    required: [true, "BE URL missing"],
  },
  feCode: {
    type: String,
    required: [true, "FE Code URL missing"],
  },
  beCode: {
    type: String,
    required: [true, "BE Code URL missing"],
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
});

// create a model
export default mongoose.model("Capstone", capstoneSchema, "capstones");
