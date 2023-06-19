import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  userId: {
    type: String
  },
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
    enum: ["pending", "interview", "rejected", "hire"]
  },
  appliedBy: {
    userId: {
      type: Array,
      default: []

    },
    status: {
      type: Boolean,
      default: false
    },
    applierName: {
      type: Array,
      default: []
    }
  },
});

const Job = mongoose.model("job", JobSchema)
export default Job;
