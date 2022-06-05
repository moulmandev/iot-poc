const Engine = require("../models/Engine");
const EngineService = require("../services/EngineService");

async function getAmbianteTemperature(req, res) {
    const adresseMac = req.params.adresseMac;

    const enginInstance = await EngineService.getEngine(adresseMac);
    console.log(enginInstance);
    
    if(enginInstance.length > 0){
        res.send(JSON.stringify(enginInstance[0].temperature));
    }
    else{
        res.send(JSON.stringify(enginInstance));
    }
    
};



module.exports = getAmbianteTemperature;