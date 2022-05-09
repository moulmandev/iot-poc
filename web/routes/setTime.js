const Engine = require("../models/engine");
const EngineService = require("../services/EngineService");

//   /setTime/:adresseMac/:time"
function setTime(req, res) {
    const adresseMac = req.params.adresseMac;
    const time = req.params.time;
    
    const engine = new Engine(macAdresse);
    engine.setLocalTime(time);

    EngineService.saveLocalTime(engine);
};



module.exports = setTime;