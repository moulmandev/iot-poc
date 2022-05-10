const Engine = require("../models/Engine");
const EngineService = require("../services/EngineService");

function getAmbianteTemperature(req, res) {
    const adresseMac = req.params.adresseMac;
    const enginInstance = EngineService.engineExist(adresseMac);
    
    res.JSON(JSON.stringify(enginInstance.temperature));
};



module.exports = getAmbianteTemperature;