const config = require("../config.js");

class Engine {
    constructor(adresseMac) {
        this.adresseMac = adresseMac;
        this.nom = "";
        this.temperature = 0;
        this.status = "off";
        this.localTime = null;
    }
    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
    }
    setTemperature(temperature){
        this.temperature = temperature;
    }
    getTemperature(){
        return this.temperature;
    }
    setLocalTime(localTime){
        this.localTime = localTime;
    }
    getLocalTime(){
        return this.localTime;
    }
    ajustTemperature(temperature, BDD){
        this.temperature = temperature;
        //BONUS Ajouter un historique dans la base de donnée pour chaque changement de temperature
    }
    modeNuit(){
        //Temperature recommande pour des chambre
        this.temperature =17;
        this.status = "night";
    }
    modeJour(){
        //Temperature recommande pour un chauffage en commun
        this.temperature=19;
        this.status = "day";
    }
    manuelle(){
        this.status = "manual";
    }
    automatique(){
        this.status = "auto";
    }
    arret(){
        this.temperature = 0;
        this.status = "off";
    }

}

module.exports = Engine;