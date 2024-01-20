const atmCardModels = require("../models/atmCardModels");

async function createATMCard(req, res) {
	try {
		console.log(req.body);
		let data = await atmCardModels.create(req.body);
		res.status(201).json({
			status: "ok",
			message: "successfully created",
			data: data,
		});
	} catch (e) {
		res.status(500).json({
			status: "error",
			message: "internal server error",
			error: e.message,
		});
	}
}
async function deleteATMCard(req, res) {
	try {
		res.status(200).json({
			status: "ok",
			message: "successfully deleted",
			data: [],
		});
	} catch (e) {
		res.status(500).json({
			status: "error",
			message: "internal server error",
			error: e.message,
		});
	}
}
async function updateATMCard(req, res) {
	try {
		res.status(200).json({
			status: "ok",
			message: "successfully updated",
			data: [],
		});
	} catch (e) {
		res.status(500).json({
			status: "error",
			message: "internal server error",
			error: e.message,
		});
	}
}
async function getATMCard(req, res) {
	try {
		let data = await atmCardModels.find();
		res.status(200).json({
			status: "ok",
			message: "successfully found...",
			data: data,
		});
	} catch (e) {
		res.status(500).json({
			status: "error",
			message: "internal server error",
			error: e.message,
		});
	}
}

module.exports = {
	createATMCard,
	updateATMCard,
	deleteATMCard,
	getATMCard,
};
