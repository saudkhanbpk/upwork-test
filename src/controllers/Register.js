import Register from '../models/Register.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const SECRET_KEY = "jwt";

export const register = async (req, res) => {
  const { fullName, email, phone, password, currentJobTitle, address } = req.body
  if (!fullName || !email || !phone || !password || !currentJobTitle || !address) {
    return res.status(400).json({ message: "Please fill in all fields" })
  }
  try {

    const hashPassword = await bcrypt.hash(password, 12)
    const newUser = new Register({
      fullName,
      email,
      phone,
      password: hashPassword,
      currentJobTitle,
      address
    }
    )
    await newUser.save()
    res.status(201).json({ message: "User registered successfully" })
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" })
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "Please Enter All Fields" })
  }
  let user = await Register.findOne({ email })
  if (!user)
    return res.status(404).json({ msg: "User Not Found" })
  try {
    let isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ msg: "User Data Not Valid" })
    } else {
      const token = jwt.sign({ email }, SECRET_KEY);
      return res.status(200).json({ user, token, msg: "User Login Successfully" })
    }

  } catch (error) {
    return console.log(error);
  }
}

//get all users
export const getUsers = async (req, res) => {
  try {
    const users = await Register.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

//update status of user
export const updateUserStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  if (!id) {
    return res.status(400).json({ message: "Please fill in all fields" })
  }
  try {
    const user = await Register.findById(id);
    user.status = status;
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

