const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const url = "mongodb://127.0.0.1:27017/ATM_CARD";
mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
	console.log("error");
});

db.once("open", () => {
	console.log("connected with db");
});
