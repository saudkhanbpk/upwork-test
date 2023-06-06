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
const db = mongoose.connection;
mongoose.set('strictQuery', false)
mongoose.connect(process.env.DATABASE_URL ? process.env.DATABASE_URL : "mongodb+srv://Roadmap-Software:393939Sk@cluster0.syewhvy.mongodb.net/coregenion")
db.on('error', console.error.bind(console, 'mongodb connection error'));
db.once('open', function () {
  console.log('Database connected');
});
// database();
app.use('/api', router);
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
