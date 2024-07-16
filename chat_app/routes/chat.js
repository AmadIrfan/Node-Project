const express = require("express");
const { chats } = require("../utils/data");
const route = express();

route.get("/", (req, res) => {
    res.send(chats);
});
route.get("/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    let singleUser = chats.find((chat) => chat._id === id);
    res.send(singleUser);
});

module.exports = route;
