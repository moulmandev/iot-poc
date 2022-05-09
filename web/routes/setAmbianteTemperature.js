const Engine = require("../models/engine");
const EngineService = require("../services/EngineService");

function setAmbianteTemperature(req, res) {
    const adresseMac = req.params.adresseMac;
    const temperature = req.params.temperature;

    const engine = new Engine(adresseMac);
    engine.setTemperature(temperature);

    EngineService.saveTemperature(engine);
};



module.exports = setAmbianteTemperature;