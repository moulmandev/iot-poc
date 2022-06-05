const Regle = require("../models/Regle");
const RegleService = require("../services/RegleService");

/**  Front call api to add new arduino with MAC ADDRESS to database */
async function setRegle(req, res) {
    const idRegle=req.params.idRegle;
    const adresseMac = req.params.adresseMac;

    const regle = new Regle(idRegle,adresseMac);
    

    const result = await RegleService.create(regle);
    res.send(JSON.stringify(result));
};



module.exports = setRegle;