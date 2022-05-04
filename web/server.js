require('dotenv/config');
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const config = require("./config.js");
const Events = require("./utils/events.js");

const UsersController =  require("./controllers/UsersController.js")

const io = new Server(server, { cors: { origin: "*" } });

const PORT = 8080;
server.listen(PORT, () => {
    console.log("[Express] Server is listening port " + PORT);
});

io.on("connection", socket => {
    socket.on(Events.AUTHENTICATE, ({ username, password }, callback) => new UsersController(callback, io).authenticate(username, password, socket));
    socket.on(Events.GET_USERS, ({token}, callback) => new UsersController(callback, io, token).getUsers());
    socket.on(Events.GET_USERS, ({token}, callback) => new UsersController(callback, io, token).getUsers());

    socket.on(Events.DISCONNECT, (reason) => new UsersController(null, io).disconnect());
});