const express = require("express");
const routes = express.Router();
const {
	createATMCard,
	getATMCard,
	deleteATMCard,
	updateATMCard,
} = require("../controller/atmCardController");

routes.post("/createATMCard", createATMCard);
routes.get("/getATMCard", getATMCard);
routes.delete("/deleteATMCard/:id", deleteATMCard);
routes.put("/updateATMCard/:id", updateATMCard);

module.exports = routes;
