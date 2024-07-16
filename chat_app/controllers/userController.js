// @ts-nocheck
const { userModel } = require("../models/userModel");
const { generateToken } = require("../utils/token");
let login = async (req, res) => {
	try {
		const { email, password } = req.body;
		let user = await userModel.findOne({ email });
		if (user) {
			let isMatch = await user.matchPassword(password);
			if (isMatch) {
				let token = await generateToken(user);
				res.status(200).json({
					message: "user Login Successfully",
					token: token,
				});
			} else {
				throw new Error("Invalid Credentials");
			}
		} else {
			throw new Error(
				"user not found please try again with valid Credentials"
			);
		}
	} catch (error) {
		res.status(500).json({ message: error.message, user: null });
	}
};

let registerUser = async (req, res) => {
	try {
		const { email, password, isOnline, name } = req.body;
		console.log(req.body);
		const user = new userModel({
			name: name,
			email: email,
			isOnline: isOnline,
			image: req.file?.filename,
			password: password,
		});
		await user.save();
		res.status(201).json({
			message: "user registered successfully ",
			user: user,
		});
	} catch (error) {
		res.status(500).json({ message: error.message, user: null });
	}
};

module.exports = {
	registerUser,
	login,
};
