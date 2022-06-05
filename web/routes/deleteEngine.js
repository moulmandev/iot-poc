const Engine = require("../models/Engine");
const EngineService = require("../services/EngineService");

async function deleteEngine(req, res) {
    console.log("ba oui ca marche le setEngine esst call");
    const adresseMac = req.params.adresseMac;
 
    const engin = new Engine(adresseMac);
    const result = await EngineService.delete(engin);
    console.log("result is: ",result);
    res.send(JSON.stringify(result));
};



module.exports = deleteEngine;