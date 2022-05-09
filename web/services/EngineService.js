const Engine = require("../models/Engine");
const MYSQL = require("../models/Mysql");
class EngineService {
        static instance = new EngineService();
     
        //TODO display ici
    engineExist(adresseMac){
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
    create(Engine){
        if(!this.engineExist(Engine.adresseMac)){
            MYSQL.query('INSERT INTO engine (adresseMac) VALUES (?)', [Engine.adresseMac],
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
    saveTemperature(Engine){
        if(this.engineExist(Engine.adresseMac)){
            MYSQL.query('UPDATE engine SET temperature = ? WHERE id = ?', [Engine.temperature,Engine.adresseMac],
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
    saveStatus(Engine){
        if(this.engineExist(Engine.adresseMac)){
            MYSQL.query('UPDATE engine SET status = ? WHERE id = ?', [Engine.status,Engine.adresseMac],
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
    saveNom(Engine){
        if(this.engineExist(Engine.nom)){
            MYSQL.query('UPDATE engine SET nom = ? WHERE id = ?', [Engine.nom,Engine.adresseMac],
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
    saveLocalTime(Engine){
        if(this.engineExist(Engine.localTime)){
            MYSQL.query('UPDATE engine SET localTime = ? WHERE id = ?', [Engine.localTime,Engine.adresseMac],
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
}
module.exports = EngineService.instance;