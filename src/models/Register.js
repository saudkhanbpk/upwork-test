import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  currentJobTitle: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Confirmed","Suspend"]

  },
  role: {
    type: String,
    default: "User", // Set the default role value as "User"
    enum: ["User", "Admin",] // Define the available roles
  }

});
const User = mongoose.model("user", RegisterSchema)
export default User;