const express = require("express");

const { loginUser, signupUser } = require("../controllers/UserController");

// router
const router = express.Router();

// login

router.post("/login", loginUser);

// signup
router.post("/signup", signupUser);

module.exports = router;
