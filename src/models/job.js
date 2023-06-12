import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true
  },
  jobDescription: {
    type: String,
    required: true
  },
  jobLocation: {
    type: String,
    required: true
  },

  status: {
    type: String,
    required: true,
    default: "pending",
    enum: ["pending", "interview", "rejected", "Hire"]
  },
  appliedBy: {
    userId: {
      type: Array,
      default: []

    },
    status: {
      type: Boolean,
      default: false
    }

  },
});

const Job = mongoose.model("job", JobSchema)
export default Job;
