const userModel = require("../model/userModel");
const { getToken } = require("../utils/token");
async function Login(req, res) {
	try {
		const { email, password } = req.body;
		const user = await userModel.findOne({ email, password });
		if (user) {
			const token = await getToken(user);
			console.log(user);
			res.status(200).json({
				message: "login successfully",
				data: {
					token: token,
					email: user.email,
					firstName: user.firstName,
					lastName: user.lastName,
				},
				status: "ok",
			});
		} else {
			res.status(404).json({ message: "Not Found ", data: user, status: "ok" });
		}
	} catch (err) {
		res.status(502).json({ message: err.message, data: null, status: "error" });
	}
}

module.exports = { Login };
