const express = require("express");
const jwt = require("jsonwebtoken");
async function getToken(user) {
	const payload = {
		id: user._id,
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
		password: user.password,
		dateOfBirth: user.dateOfBirth,
		role: user.role,
	};
	const token = await jwt.sign(payload, "this is my key");
	return token;
}
module.exports = { getToken };
