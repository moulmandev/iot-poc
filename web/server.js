require('dotenv/config');
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const config = require("./config.js");
const Events = require("./utils/events.js");



const PORT = 8080;
server.listen(PORT, () => {
    console.log("[Express] Server is listening port " + PORT);
});

//Routes
const addEngine = require("./routes/addEngine");
const getEngine = require("./routes/getEngine");
const addUser = require("./routes/addUser");
const getUser = require("./routes/getUser");

console.log("you enter on server.js");

app.use(Events.ADD_ENGINE,addEngine);
app.use(Events.GET_ENGINE,getEngine);
app.use(Events.ADD_USER,addUser);
app.use(Events.GET_USERS,getUser);
