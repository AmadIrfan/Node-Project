const express = require("express");
const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
	try {
		const token = req.headers.authorization.split(" ")[1];
		if (!token) {
			return res.status(401).json({ message: "No token provided" });
		}
		const decodedToken = jwt.decode(token, "this is my key");
		if (decodedToken) {
			req.user = decodedToken;
			next();
		}
	} catch (err) {
		return res.status(505).json({ message: err.message });
	}
}

module.exports = { verifyToken };
