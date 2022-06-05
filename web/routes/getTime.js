const Engine = require("../models/Engine");
const EngineService = require("../services/EngineService");

function getTime(req, res) {
    const adresseMac = req.params.adresseMac;
    const enginInstance = EngineService.getEngine(adresseMac);
    
    res.JSON(JSON.stringify(enginInstance.getTime()));
};



module.exports = getTime;