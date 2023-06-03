import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./src/routes/routes.js";
import database from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
database();
app.use('/api', router);
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
