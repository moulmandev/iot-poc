const Regle = require("../models/Regle");
const RegleService = require("../services/RegleService");

async function setRegleEnd(req, res) {
    const adresseMac = req.params.adresseMac;
    const idRegle = req.params.idRegle;
    const start = req.params.start;

    const regle = new Regle(idRegle,adresseMac);
    regle.setStart(start);

    const result = await RegleService.saveStart(regle);
    res.send(JSON.stringify(result));
};


module.exports = setRegleEnd;