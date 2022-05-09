const Engine = require("../models/Engine");
const EngineService = require("../services/EngineService");

/**  Front call api to add new arduino with MAC ADDRESS to database */
function setEngine(req, res) {
    const keyName=req.query.adressemac;
    let macAdresse = JSON.parse(keyName);
    macAdresse = macAdresse.adressemac;

    const engin = new Engine(macAdresse);
    EngineService.save(engin);
};



module.exports = setEngine;