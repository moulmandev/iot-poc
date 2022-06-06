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
const getEngines = require("./routes/getEngines");

const setEngine = require("./routes/setEngine");
const getEngine = require("./routes/getEngine");

const setAmbianteTemperature = require("./routes/setAmbianteTemperature");
const getAmbianteTemperature = require("./routes/getAmbianteTemperature");
const setRegle = require("./routes/setRegle");
const getRegleVoulu = require("./routes/getRegleVoulu");
const getTime = require("./routes/getTime");
const setTime = require("./routes/setTime");

const setStatus = require("./routes/setStatus");

const setRegleEnd = require("./routes/setRegleEnd");

const setRegleNom = require("./routes/setRegleNom");
const setRegleStart = require("./routes/setRegleStart");
const setRegleTemperature = require("./routes/setRegleTemperature");

const deleteRegle = require("./routes/deleteRegle");
const deleteEngine = require("./routes/deleteEngine");

app.get(Events.GET_ENGINES,getEngines);

app.get(Events.SET_ENGINE,setEngine);
app.get(Events.GET_ENGINE,getEngine);

app.get(Events.SET_AMBIANTE_TEMPERATURE,setAmbianteTemperature);
app.get(Events.GET_CHAUFFAGE_TEMPERATURE,getAmbianteTemperature);

app.get(Events.SET_REGLE,setRegle);
app.get(Events.GET_REGLE_VOULU,getRegleVoulu);

app.get(Events.GET_TIME,getTime);
app.get(Events.SET_TIME,setTime);

app.get(Events.SET_STATUS,setStatus);

app.get(Events.SET_REGLE_END,setRegleEnd);

app.get(Events.SET_REGLE_NOM,setRegleNom);
app.get(Events.SET_REGLE_START,setRegleStart);
app.get(Events.SET_REGLE_TEMPERATURE,setRegleTemperature);

app.get(Events.DELETE_REGLE,deleteRegle);
app.get(Events.DELETE_ENGINE,deleteEngine);