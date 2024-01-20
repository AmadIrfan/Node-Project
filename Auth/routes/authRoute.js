const express = require("express");
const router = express.Router();
const { verifyToken } = require("../utils/verifyToken");

function checkRole(roles) {
	console.log("here");
	return (req, res, next) => {
		const role = req.user.role;
		if (roles.includes(role)) {
			next();
		} else {
			return res
				.status(403)
				.json({ message: "Don't have permission to access this api" });
		}
	};
}

router.get("/getAdmin", verifyToken, checkRole(["admin"]), (req, res) => {
	res.send("admin");
});

router.get(
	"/getSuperAdmin",
	verifyToken,
	checkRole(["super admin"]),
	(req, res) => {
		res.send("Supper admin");
	}
);
router.get("/getUser", verifyToken, checkRole(["user"]), (req, res) => {
	res.send("user");
});
router.get("/getSuperAndAdmin",verifyToken,checkRole(["super admin", "admin"]),
	(req, res) => {
		res.send("Super Admin and Admin");
	}
);

module.exports = router;
