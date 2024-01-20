// const express = require("express");
// const router = express.Router();
const { db } = require("../utils/db");
const quizModel = require("../models/quizModels");

async function getQuestions(req, res) {
	const result = await quizModel.find();
	console.log(result);
	res.status(200).json({
		status: "ok",
		message: "successful",
		data: result,
	});
}

async function postQuestions(req, res) {
	console.log(req.body);

	let question = await db.collection("quizquestions").insertOne(req.body);
	res.status(201).json({
		status: "ok",
		message: "successfully inserted ",
		data: question,
	});
}
async function updatesQuestions(req, res) {
	const { id } = req.params;
	let question = await quizModel.findByIdAndUpdate(id, req.body);
	res.status(200).json({
		status: "ok",
		message: "successfully Updated ",
		data: question,
	});
}
async function deleteQuestions(req, res) {
	const { id } = req.params;
	let question = await quizModel.findByIdAndDelete(id);
	res.status(200).json({
		status: "ok",
		message: "successfully Deleted ",
		data: question,
	});
}
module.exports = {
	getQuestions,
	postQuestions,
	updatesQuestions,
	deleteQuestions,
};
