const Engine = require("../models/Engine");
const EngineService = require("../services/EngineService");

async function getEngine(req, res) {
    const adresseMac = req.params.adresseMac;
    console.log("req.params.adresseMac: ",adresseMac);

    const result = await EngineService.getEngine(adresseMac);
    res.send(JSON.stringify(result));
};

module.exports = getEngine;