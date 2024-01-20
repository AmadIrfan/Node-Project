const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const body_Parser = require("body-parser");
const quizRoutes = require("./routes/quizRoute");
app.use(cors());
app.use(body_Parser.json());

app.use(morgan("dev"));
app.use("/quiz", quizRoutes);

app.get("/", (req, res) => {
	res.send("welcome to me server");
});

app.listen(3000, () => {
	console.log("Server is running on PORT 3000");
});
