import express from "express";
import { getUsers, login, register, updateUserStatus } from "../controllers/Register.js";
import { appliedBy, createJob, getJobWithUserId, getJobs, updateJobStatus } from "../controllers/job.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the API");
}
);
//auth
router.post('/register', register)
router.post('/login', login)

//job
router.post('/createJob', createJob)
router.get('/getJobs', getJobs)

//users
router.get('/getUsers', getUsers)
//update user status
router.post('/updateUser', updateUserStatus)

//job Status
router.post('/updateJobStatus', updateJobStatus)
//applied by
router.post('/appliedBy', appliedBy)
//get the job with userId
router.post('/getJob', getJobWithUserId)

export default router;