const Engine = require("../models/Engine");
const EngineService = require("../services/EngineService");

function getEngine(req, res) {
    const adresseMac = req.params.adresseMac;
    console.log("req.params.adresseMac: ",adresseMac);

    let asyncNewG = new Promise(async (resolve, reject) => {
        resolve(EngineService.getEngine(adresseMac));
    });

    let result;
    asyncNewG.then(function(result) {
        console.log("resultat dans la promise: ",result)
        res.send(JSON.stringify(result));
    });


    
};

module.exports = getEngine;