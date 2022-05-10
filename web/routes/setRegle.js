const Regle = require("../models/Regle");
const RegleService = require("../services/RegleService");

/**  Front call api to add new arduino with MAC ADDRESS to database */
function setRegle(req, res) {
    const idRegle=req.query.id;
    const adresseMac = req.params.adresseMac;

    const regle = new Regle(idRegle,adresseMac);
    RegleService.save(regle);
};



module.exports = setRegle;