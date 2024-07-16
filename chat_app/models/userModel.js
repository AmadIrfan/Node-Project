// @ts-nocheck
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
	{
		name: {
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
		image: {
			type: String,
			required: true,
			default:
				"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png",
		},
		isOnline: {
			type: String,
			default: "0",
			required: true,
		},
	},
	{ timestamps: true }
);
userSchema.methods.matchPassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

userSchema.pre("save", async function (next) {
	this.password = await bcrypt.hash(this.password, 8);
	next();
});
const userModel = mongoose.model("User", userSchema);

module.exports = { userModel };
