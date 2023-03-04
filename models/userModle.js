const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    requrired: true,
    unique: true,
  },
  password: {
    type: String,
    requrired: true,
  },
});

module.exports = mongoose.model("User", userSchema);
