// @ts-nocheck
const express = require("express");
const route = express();
const { upload } = require("./uploadImage");
const { registerUser, login } = require("../controllers/userController");
const { userModel } = require("../models/userModel");

route.post("/login", login);
route.post("/   ", upload.single("image"), registerUser);
route.post("/forgetPassword", (req, res) => {});
route.post("/forgetPassword", (req, res) => {});
route.get("/user", (req, res) => {});
route.get("/user/:id", (req, res) => {});
route.put("/user/:id", (req, res) => {});
route.delete("/user/:id", (req, res) => {});

module.exports = route;
