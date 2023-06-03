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
    default: "Pending",
    enum: ["pending", "interview", "rejected", "Hire"]


  }

});

const Job = mongoose.model("job", JobSchema)
export default Job;
