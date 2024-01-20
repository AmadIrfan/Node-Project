const express = require("express");
const mongoose = require("mongoose");
const userS = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "user", "super admin"],
  },
  isVarified: {
    type: Boolean,
    required: true,
    default: false,
  },
});
module.exports = mongoose.model("user_auth", userS);
