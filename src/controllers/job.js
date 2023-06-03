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
    const Job = await Job.findById(id);
    Job.status = status;
    await Job.save();
    res.status(201).json(Job);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }


}

export default { getJobs, createJob }

