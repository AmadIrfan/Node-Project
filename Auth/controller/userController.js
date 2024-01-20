const userModel = require("../model/userModel");


async function registerUser(req, res) {
	try {
		const user = await userModel.create(req.body);
		res
			.status(201)
			.json({ message: "created successfully", data: user, status: "ok" });
	} catch (err) {
		res.status(505).json({ message: err.message, data: null, status: "error" });
	}
}
async function getAllUser(req, res) {
	try {
		const user = await userModel.find();
		res.status(200).json({ message: "successful", data: user, status: "ok" });
	} catch (err) {
		res.status(505).json({ message: err.message, data: null, status: "error" });
	}
}

async function deleteUser(req, res) {}
async function editUser(req, res) {}
module.exports = { registerUser, getAllUser, deleteUser, editUser };
