const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const db = require("./utils/db");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.get("/", (req, res) => {
	res.send("welcome to my role base authentication system");
});
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.listen(3000, () => {
	console.log("server is running on port 3000 ");
});
