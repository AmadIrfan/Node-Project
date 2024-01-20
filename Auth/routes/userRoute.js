const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel");

const { Login } = require("../controller/loginController");

const {
	registerUser,
	getAllUser,
	deleteUser,
	editUser,
} = require("../controller/userController");

router.post("/register", registerUser);
router.post("/login", Login);
router.get("/users", getAllUser);
router.delete("/delete/:id", deleteUser);
router.put("/update/:id", editUser);

module.exports = router;
