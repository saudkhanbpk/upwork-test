import Job from "../models/job.js";

export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createJob = async (req, res) => {
  const job = req.body;
  const newJob = new Job(job);
  try {
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

//update status of Job
export const updateJobStatus = async (req, res) => {
  const { id, status } = req.body;
  if (!id) {
    return res.status(400).json({ message: "Please fill in all fields" })
  }

  try {
    const Job1 = await Job.findById(id);
    Job1.status = status;
    await Job1.save();
    res.status(201).json(Job1);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }

}

//applied by
export const appliedBy = async (req, res) => {
  const { userId, status, jobId } = req.body;
  if (!userId || !jobId) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  try {
    const job = await Job.findById(jobId);
    if (!job.appliedBy.userId.includes(userId)) {
      job.appliedBy.userId.push(userId); // Push userId to the userId array
    }
    job.appliedBy.status = status; // Update the status
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};






export default { getJobs, createJob }

