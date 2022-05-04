const Engine = require("../models/Engine");
const MYSQL = require("../models/Mysql");
class engineService {

    /** 
    *    -this.id = Engine.incrementId();
    *    -this.socket = null;
    *    -this.nom = nom;
    *    -this.temperature = 0;
    *    -this.status = "off" 
    **/


    getById(engineId){
        let engine = new Engine();
        

        return engine;
    }
    getByName(){

    }
    #get(defaultSearch){
        //TODO Search for 2 metho (id and name, with default search making)
        let querry;
        return querry;
    }

    set(Engine){
        //TODO Requete preparer
        Engine.id = MYSQL.instance.query("INSERT INTO Engine",Engine.id,Engine.nom,Engine.temperature,Engine.status,(err, data) => {
            if(err) {
                console.error(err);
                return;
            }
            // rows fetch
            console.log(data);
        });
    
    }

}