// @ts-nocheck
const jwt = require("jsonwebtoken");

let generateToken = async (user) => {
	let payload = { ...user };
	const options = {
		expiresIn: "1d", // Token expiry time
	};
	console.log(process.env.TOKEN_KEY);
	let token = jwt.sign(payload, process.env.TOKEN_KEY, options);
	return token;
};
function verifyToken(token) {
	try {
		return jwt.verify(token, process.env.TOKEN_KEY);
	} catch (error) {
		return null;
	}
}
module.exports = { generateToken, verifyToken };
