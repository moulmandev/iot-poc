const Regle = require("../models/Regle");
const RegleService = require("../services/RegleService");

async function setRegleEnd(req, res) {
    const adresseMac = req.params.adresseMac;
    const idRegle = req.params.idRegle;
    const temperature = req.params.temperature;

    const regle = new Regle(idRegle,adresseMac);
    regle.setTemperature(temperature);

    const result = await RegleService.saveTemperature(regle);
    res.send(JSON.stringify(result));
};


module.exports = setRegleEnd;