const Engine = require("../models/engine");
const EngineService = require("../services/EngineService");

async function setAmbianteTemperature(req, res) {
    const adresseMac = req.params.adresseMac;
    const temperature = req.params.temperature;
    console.log(adresseMac);
    console.log(temperature);


    const engine = new Engine(adresseMac);
    engine.setTemperature(temperature);

    const result = await EngineService.saveTemperature(engine);
    res.send(JSON.stringify(result));
};


module.exports = setAmbianteTemperature;