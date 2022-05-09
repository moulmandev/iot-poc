const config = require("../config.js");

class Regle {
    //id,idEngine,start,end,temperature
    constructor(id,idEngine) {
        this.id = id;
        this.idEngine = idEngine;
        this.nom = "";
        this.start = null;
        this.end = null;
        this.temperature = null;
    }
    setId(id){
        this.id = id;
    }
    setIdEngine(idEngine){
        this.idEngine = idEngine;
    }
    setNom(nom){
        this.nom = nom;
    }
    setStart(start){
        this.start = start;
    }
    setEnd(end){
        this.end = end;
    }
    setTemperature(temperature){
        this.temperature = temperature;
    }
    getId(){
        return this.id;
    }
    getIdEngine(){
        return this.idEngine;
    }
    getNom(){
        return this.nom;
    }
    getStart(){
        return this.start;
    }
    getEnd(){
        return this.end;
    }
    getTemperature(){
        return this.temperature;
    }
}

module.exports = Regle;