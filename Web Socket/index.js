import express from "express";
import WebSocket, { WebSocketServer } from "ws";

import morgan from "morgan";

const app = express();
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.send("welcome to Server");
});

let server = app.listen(3000, () => {
  console.log("Server is running at 3000");
});

// @ts-ignore

let wss = new WebSocketServer({ server: server });

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    console.log(data);
    ws.send("thanks buddy");
  });
});
