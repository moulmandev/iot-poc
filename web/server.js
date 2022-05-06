require('dotenv/config');
const express = require("express");
const app = express();

const config = require("./config.js");
const Events = require("./utils/events.js");


app.use(Events.ADD_ENGINE,addEngine);
app.use(Events.GET_ENGINE,getEngine);
app.use(Events.ADD_USER,addUser);
app.use(Events.GET_USERS,getUser);
