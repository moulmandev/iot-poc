const Engine = require("../models/Engine");
const EngineService = require("../services/EngineService");

/**  Front call api to add new arduino with MAC ADDRESS to database */
function setEngine(req, res) {
    const adresseMac = req.params.adresseMac;
 
    const engin = new Engine(adresseMac);
    EngineService.save(engin);
};



module.exports = setEngine;