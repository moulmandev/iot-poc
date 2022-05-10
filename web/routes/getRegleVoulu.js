const Regle = require("../models/Regle");
const RegleService = require("../services/RegleService");
const Engine = require("../models/Engine");
const EngineService = require("../services/EngineService");

function getRegleVoulu(req, res) {
    const adresseMac = req.params.adresseMac;

    //DISPLAY toutes les regle qui sont associé a l adresse mac
    const enginInstance = EngineService.engineExist(macAdresse);
    let regle = EngineService.ReglesLinked(enginInstance);
    res.JSON(JSON.stringify(regle));
};



module.exports = getRegleVoulu;