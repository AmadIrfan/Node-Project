// @ts-nocheck
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
const url = process.env.MONGO_PATH;
mongoose.connect(url);

const db = mongoose.connection;

db.on("error", (error) => {
	try {
		console.log(error);
	} catch (error) {
		console.log(error);
	}
});

db.once("open", () => {
	console.log("connected");
});
