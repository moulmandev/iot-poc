const Engine = require("../models/Engine");
const MYSQL = require("../models/Mysql");
class EngineService {
        static instance = new EngineService();
     
        //TODO display ici
    engineExist(EngineParam){
      console.log("EngineParam: ",EngineParam);
      const adresseMac = EngineParam.adresseMac;
      console.debug("adresseMac: ",adresseMac);
        MYSQL.execute(
            'SELECT * FROM `engine` WHERE `adresseMac` = ?',
            [adresseMac],
            function(err, results, fields) {
              console.log("results: ",results); // results contains rows returned by server
              if(err){
                console.error("err: ",err);
              }
              else{
                  return results;
              }
              return null;
            }
          );
    }
    getEngine(adresseMac){
      let sendResponse;
      console.debug("adresseMac: ",adresseMac);
          MYSQL.execute(
            'SELECT * FROM `engine` WHERE `adresseMac` = ?',
            [adresseMac],
            await function(err, results, fields) {
              console.log("results: ",results); // results contains rows returned by server
              if(err){
                console.error("err: ",err);
              }
              else{
                console.log("envoie");
                  return results;
              }
              return null;
            }
          );
          console.log("envoie222");
          
    }
    create(EngineParam){
        if(!this.engineExist(EngineParam)){
            MYSQL.query('INSERT INTO engine (adresseMac) VALUES (?)', [EngineParam.adresseMac],
                function(err, results, fields) {
                  console.log("results: ",results); // results contains rows returned by server
                  if(err){
                    console.error("err: ",err);
                  }
                  else{
                      return results;
                  }
                  // If you execute same statement again, it will be picked from a LRU cache
                  // which will save query preparation time and give better performance
                }
              );
        }
        else{  
            console.error("The engine already exist");
        }
    }
    saveTemperature(EngineParam){
        if(this.engineExist(EngineParam)){
            MYSQL.query('UPDATE engine SET temperature = ? WHERE id = ?', [EngineParam.temperature,EngineParam.adresseMac],
            function(err, results, fields) {
              console.log("results: ",results); // results contains rows returned by server
              if(err){
                console.error("err: ",err);
              }
              else{
                  return results;
              }
            }
          );
        }
        else{  
            console.error("The engine dont exist, we cant update temperature");
        }
    }
    saveStatus(EngineParam){
        if(this.engineExist(EngineParam)){
            MYSQL.query('UPDATE engine SET status = ? WHERE id = ?', [EngineParam.status,EngineParam.adresseMac],
            function(err, results, fields) {
            console.log("results: ",results); // results contains rows returned by server
                if(err){
                    console.error("err: ",err);
                }
                else{
                    return results;
                }
            }
        );
        }
        else{
            console.error("The engine dont exist, we cant update status");
        }
    }
    saveNom(EngineParam){
        if(this.engineExist(EngineParam)){
            MYSQL.query('UPDATE engine SET nom = ? WHERE id = ?', [EngineParam.nom,EngineParam.adresseMac],
            function(err, results, fields) {
              console.log("results: ",results); // results contains rows returned by server
              if(err){
                console.error("err: ",err);
              }
              else{
                  return results;
              }
            }
          );
        }
        else{  
            console.error("The engine dont exist, we cant update nom");
        }
    }
    saveLocalTime(EngineParam){
        if(this.engineExist(EngineParam)){
            MYSQL.query('UPDATE engine SET localTime = ? WHERE id = ?', [EngineParam.localTime,EngineParam.adresseMac],
            function(err, results, fields) {
              console.log("results: ",results); // results contains rows returned by server
              if(err){
                console.error("err: ",err);
              }
              else{
                  return results;
              }
            }
          );
        }
        else{  
            console.error("The engine dont exist, we cant update nom");
        }
    }
    //TODO Recuperer toutes les règle lié a l'engins
    ReglesLinked(EngineParam){
      if(this.engineExist(EngineParam)){
        MYSQL.execute(
          //'SELECT * FROM `engine` WHERE `adresseMac` = ?',
          'SELECT * FROM `engine` INNER JOIN `regle` WHERE `engine.id` = `regle.idEngine`',
         // [adresseMac],
          function(err, results, fields) {
            console.log("results with innerJoin: ",results); // results contains rows returned by server
            if(err){
              console.error("err: ",err);
            }
            else{
                return results;
            }
            return null;
          }
        );
      }
      else{  
          console.error("The engine dont exist, we cant update nom");
      }
  }
}
module.exports = EngineService.instance;