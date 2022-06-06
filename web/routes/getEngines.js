const Engine = require("../models/Engine");
const EngineService = require("../services/EngineService");

async function getEngines(req, res) {

    const result = await EngineService.getEngines();
    res.send(JSON.stringify(result));
};

module.exports = getEngines;