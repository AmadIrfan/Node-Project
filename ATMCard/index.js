const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const atmRoutes = require("./routes/atmCardRoutes");

const db = require("./utils/db");

const body_parser = require("body-parser");

require("dotenv").config();

app.use(cors());
app.use(morgan("dev"));
app.use(body_parser.json());

app.get("/", (req, res) => {
	res.send("this is my ATM card Server");
});

app.use("/ATMCard", atmRoutes);

app.listen(process.env.PORT, () => {
	console.log("Server is running in port ", process.env.PORT);
});
