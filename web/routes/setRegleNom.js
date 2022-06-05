const Regle = require("../models/Regle");
const RegleService = require("../services/RegleService");

async function setRegleEnd(req, res) {
    const adresseMac = req.params.adresseMac;
    const idRegle = req.params.idRegle;
    const nom = req.params.nom;

    const regle = new Regle(idRegle,adresseMac);
    regle.setNom(nom);

    const result = await RegleService.saveNom(regle);
    res.send(JSON.stringify(result));
};


module.exports = setRegleEnd;