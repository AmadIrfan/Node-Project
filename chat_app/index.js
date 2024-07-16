// @ts-nocheck
require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const db = require("./utils/mongoDB");
const chatRoute = require("./routes/chat");
const userRoute = require("./routes/userRoutes");
const expressSession = require("express-session");
const cors = require("cors");
const http = require('http');
const { Server } = require('socket.io');
const { log } = require("console");

const app = express();
let server = http.createServer(app)
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


app.get("/", (req, res) => res.send("welcome to my chat app"));
app.use("/user", userRoute);
app.use("/chat", chatRoute);

const io = new Server(server, {
	cors: {
		origin: '*',
		methods: ['GET', "POST"],
		credentials: true,
	}
});

io.on('connection', (socket) => {
	console.log('user connected', socket.id);
	// socket.broadcast.emit('welcome', `${socket.id} joined the server`)
	// socket.broadcast.emit('welcome', `welcome to the server`)
	socket.on('disconnect', () => {
		console.log('user dis-connected', socket.id);
	})
})

server.listen(process.env.PORT, () => {
	console.log(`server is running on port ${process.env.PORT}`);
});