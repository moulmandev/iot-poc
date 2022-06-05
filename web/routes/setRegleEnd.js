const Regle = require("../models/Regle");
const RegleService = require("../services/RegleService");

async function setRegleEnd(req, res) {
    const adresseMac = req.params.adresseMac;
    const idRegle = req.params.idRegle;
    const end = req.params.end;

    const regle = new Regle(idRegle,adresseMac);
    regle.setEnd(end);

    const result = await RegleService.saveEnd(regle);
    res.send(JSON.stringify(result));
};


module.exports = setRegleEnd;