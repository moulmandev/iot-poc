const config = require("../config.js");
const TemperatureController = require("../controllers/TemperatureController.js");

class Engine {
    constructor(nom) {
        this.id = Engine.incrementId();
        this.socket = null;
        this.nom = nom;
        this.temperature = 0;
        this.status = "off"
    }
    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
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

module.exports = UsersController;