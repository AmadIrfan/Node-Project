const mongoose = require("mongoose");

let quiz = new mongoose.Schema({
	question: {
		type: String,
		required: true,
	},
	answers: {
		type: Array,
		required: true,
	},
	correctAnswer: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("quizQuestions", quiz);
