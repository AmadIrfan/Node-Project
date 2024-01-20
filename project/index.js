const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const db = require("./utils/db");
const lmsRoute = require("./route/lmsRoute");

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/lms", lmsRoute);
app.get("/", (req, res) => {
	res.send("welcome to me server");
});

app.listen(process.env.PORT, () => {
	console.log("server is running on port", process.env.PORT);
});
