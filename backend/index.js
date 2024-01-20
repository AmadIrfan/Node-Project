const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./utils/db");
const user = require("./route/user");

require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());
app.use("/user", user);
app.get("/", (req, res) => {
	res.send("this is server");
});
app.listen(process.env.PORT, () => {
	console.log("app is running in ", process.env.PORT);
});
