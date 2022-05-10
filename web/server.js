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
const setEngine = require("./routes/setEngine");
const getEngine = require("./routes/getEngine");

const setAmbianteTemperature = require("./routes/setAmbianteTemperature");
const getAmbianteTemperature = require("./routes/getAmbianteTemperature");
const setRegle = require("./routes/setRegle");
const getRegleVoulu = require("./routes/getRegleVoulu");
const getTime = require("./routes/getTime");
const setTime = require("./routes/setTime");


app.get(Events.SET_ENGINE,setEngine);
app.get(Events.GET_ENGINE,getEngine);

app.get(Events.SET_AMBIANTE_TEMPERATURE,setAmbianteTemperature);
app.get(Events.GET_CHAUFFAGE_TEMPERATURE,getAmbianteTemperature);

app.get(Events.SET_REGLE,setRegle);
app.get(Events.GET_REGLE_VOULU,getRegleVoulu);

app.get(Events.GET_TIME,getTime);
app.get(Events.SET_TIME,setTime);


