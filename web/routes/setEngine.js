const Engine = require("../models/Engine");
const EngineService = require("../services/EngineService");

/**  Front call api to add new arduino with MAC ADDRESS to database */
async function setEngine(req, res) {
    console.log("ba oui ca marche le setEngine esst call");
    const adresseMac = req.params.adresseMac;
 
    const engin = new Engine(adresseMac);
    const result = await EngineService.create(engin);
    console.log("result is: ",result);
    res.send(JSON.stringify(result));
};



module.exports = setEngine;