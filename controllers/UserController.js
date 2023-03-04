const User = require("../models/userModle");

// login user

const loginUser = async (req, res) => {
  res.json({ message: "login" });
};

// signup user
const signupUser = async (req, res) => {
  res.json({ message: "singup" });
};

module.exports = {
  loginUser,
  signupUser,
};
