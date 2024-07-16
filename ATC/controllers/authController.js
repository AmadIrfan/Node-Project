// controllers/authController.js

const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/userModel');

// Signup Controller
exports.signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ status: 'fail', message: 'User already exists' });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user
    const newUser = await User.create({ username, password: hashedPassword });
    res.status(201).json({ status: 'success', data: newUser });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};

// Login Controller
exports.login = passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true
});

// Logout Controller
exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};