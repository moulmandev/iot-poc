const Engine = require("../models/engine");
const EngineService = require("../services/EngineService");

async function setStatus(req, res) {
    const adresseMac = req.params.adresseMac;
    const status = req.params.status;
    console.log(adresseMac);
    console.log(status);


    const engine = new Engine(adresseMac);
    engine.status = status;

    const result = await EngineService.saveStatus(engine);
    res.send(JSON.stringify(result));
};


module.exports = setStatus;