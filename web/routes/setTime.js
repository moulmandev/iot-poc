const Engine = require("../models/engine");
const EngineService = require("../services/EngineService");

async function setTime(req, res) {
    const adresseMac = req.params.adresseMac;
    const time = req.params.time;
    console.log(adresseMac);
    console.log(time);


    const engine = new Engine(adresseMac);
    engine.localTime = time;

    const result = await EngineService.saveLocalTime(engine);
    res.send(JSON.stringify(result));
};


module.exports = setTime;