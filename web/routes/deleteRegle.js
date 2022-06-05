const Regle = require("../models/Regle");
const RegleService = require("../services/RegleService");

async function deleteRegle(req, res) {
    const idRegle=req.params.idRegle;
    const adresseMac = req.params.adresseMac;

    const regle = new Regle(idRegle,adresseMac);
    

    const result = await RegleService.delete(regle);
    res.send(JSON.stringify(result));
};



module.exports = deleteRegle;