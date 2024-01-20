const mongoose = require("mongoose");

require("dotenv").config();
mongoose.set("strictQuery", true);

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

db.on("error", (err) => {
	console.log("ERROR --> ", err.message);
});
db.once("open", () => {
	console.log("connected with db");
});
