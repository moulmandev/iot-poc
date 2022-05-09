function getAmbianteTemperature(req, res) {
    const keyName=req.query.adresseMac;

    let macAdresse = JSON.parse(keyName);
    macAdresse = macAdresse.adressemac;

    const enginInstance = EngineService.engineExist(macAdresse);
    res.JSON(JSON.stringify(enginInstance.temperature));
};



module.exports = getAmbianteTemperature;