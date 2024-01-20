const express = require("express");
const {
	getController,
	postController,
} = require("../controller/lmsController");
const router = express.Router();

router.get("/", getController);
router.post("/p", postController);

module.exports = router;
