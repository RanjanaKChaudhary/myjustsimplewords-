const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken"); 
const verifyToken = require ("../middleware/authMiddleware");
const { getMe } = require("../controllers/authController");



router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingRegisteredUser = await User.findOne({ email });
    if (existingRegisteredUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const registeredUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await registeredUser.save();

    res.status(201).json({ message: "Registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    //CREATE JWT
    const token = jwt.sign(
      {userId: user._id,
      }, 
      process.env.JWT_SECRET, 
      {expiresIn: "1d"}
    );

    //SAVE TOKEN IN COOKIE
    res.cookie("token", token, {
      httpOnly: true,
      secure: true, //at production level it must be true
      sameSite: "none",
    });

    // SUCCESS LOGIN
    res.json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

});

router.get("/me", verifyToken, getMe);

//logout

router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true, // true in production (HTTPS)
    sameSite: "none",
  });

  return res.status(200).json({
    message: "Logged out successfully"
  });
});

module.exports = router;
