const Regle = require("../models/Regle");
const RegleService = require("../services/RegleService");
const Engine = require("../models/Engine");
const EngineService = require("../services/EngineService");

async function getRegleVoulu(req, res) {
    const adresseMac = req.params.adresseMac;

    //DISPLAY toutes les regle qui sont associé a l adresse mac
    const enginInstance = new Engine(adresseMac);
    const regle =await EngineService.ReglesLinked(enginInstance);
    res.send(JSON.stringify(regle));
};



module.exports = getRegleVoulu;