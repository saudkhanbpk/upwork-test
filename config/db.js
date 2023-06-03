import mongoose from "mongoose";
const database = async () => {
  const db = mongoose.connection;
  mongoose.set('strictQuery', false)
  mongoose.connect(process.env.DATABASE_URL)
  db.on('error', console.error.bind(console, 'mongodb connection error'));
  db.once('open', function () {
    console.log('Database connected');
  });
}


export default database;