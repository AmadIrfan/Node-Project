const express = require("express");
const bcrypt = require("bcrypt");
const userSchema = require("../model/user_model");
const route = express.Router();

route.post("/", async (req, res) => {
	try {
		const { password, ...remainData } = req.body;
		const hashPass = await bcrypt.hash(password, 8);
		console.log(hashPass);
		console.log(remainData);
		let newUser = await userSchema.create({
			password: hashPass,
			ProfilePicture: "",
			...remainData,
		});
		res.status(200).json({ message: "ok", status: "ok", data: remainData });
	} catch (error) {
		console.log(error);
		res
			.status(500)
			.json({ message: error.message, status: "error", data: null });
	}
});
module.exports = route;
