const mongodb = require("mongoose");

let atmCard = new mongodb.Schema(
	{
		cardBankName: {
			type: String,
			required: true,
		},
		cardType: {
			type: String,
			required: true,
		},
		cardNo: {
			type: String,
			required: true,
		},
		cardHolderName: {
			type: String,
			required: true,
		},
		issueDate: {
			type: Date,
			required: true,
		},
		endDate: {
			type: Date,
			required: true,
		},
		cvc: { type: Number, required: true },
	},
	{ timestamps: true }
);

module.exports = mongodb.model("atm_cards", atmCard);
