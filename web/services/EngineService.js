const Engine = require("../models/Engine");
const MYSQL = require("../models/Mysql");
class EngineService {
        static instance = new EngineService();
     
        //TODO display ici
    async engineExist(EngineParam){
      const MYSQLpromise = MYSQL.promise();
      const adresseMac = EngineParam.adresseMac;
      const [rows, fields] = await MYSQLpromise.execute('SELECT * FROM `engine` WHERE `adresseMac` = ?',[adresseMac]);
      if(rows.length > 0){
        return true;
      }
      else{
        return false;
      }
    }

    async getEngine(adresseMac){
      const MYSQLpromise = MYSQL.promise();
      try {
        const [rows, fields] = await MYSQLpromise.execute('SELECT * FROM `engine` WHERE `adresseMac` = ?',[adresseMac]);
        return rows;
      } catch (error) {return {code: 400,error: error.sqlMessage}}

      
    }

    async create(Engine){
      const MYSQLpromise = MYSQL.promise();
      try {
        const result = await MYSQLpromise.execute('INSERT INTO engine (adresseMac) VALUES (?)', [Engine.adresseMac]);  
      return { code: 200 }
      } catch (error) {return {code: 400,error: error.sqlMessage}}
    }

    async saveTemperature(EngineParam){
      const MYSQLpromise = MYSQL.promise();
      console.log(EngineParam.temperature);
      try {
        const result = await MYSQLpromise.execute('UPDATE engine SET temperature = ? WHERE adresseMac = ?', [EngineParam.temperature,EngineParam.adresseMac]);  
        return { code: 200 }
      } catch (error) {return {code: 400,error: error.sqlMessage}}
    }

    async saveStatus(EngineParam){
      const MYSQLpromise = MYSQL.promise();
      try {
        const result = await MYSQLpromise.execute('UPDATE engine SET status = ? WHERE adresseMac = ?', [EngineParam.status,EngineParam.adresseMac]);  
      return { code: 200 }
      } catch (error) {return {code: 400,error: error.sqlMessage}}
    }
    
    async saveNom(EngineParam){
      const MYSQLpromise = MYSQL.promise();
      console.log(EngineParam.temperature);
      try {
        const result = await MYSQLpromise.execute('UPDATE engine SET nom = ? WHERE adresseMac = ?', [EngineParam.nom,EngineParam.adresseMac]);  
        return { code: 200 }
      } catch (error) {return {code: 400,error: error.sqlMessage}}
    }

    async saveLocalTime(EngineParam){
      const MYSQLpromise = MYSQL.promise();
      console.log(EngineParam);
      try { 
        const result = await MYSQLpromise.execute('UPDATE engine SET time = ? WHERE adresseMac = ?', [EngineParam.localTime,EngineParam.adresseMac]);  
        return { code: 200 }
      } catch (error) {return {code: 400,error: error.sqlMessage}}
    }

    //TODO Recuperer toutes les règle lié a l'engins
    async ReglesLinked(EngineParam){
      const MYSQLpromise = MYSQL.promise();
      try {
        const result = await MYSQLpromise.execute('SELECT * FROM regle WHERE regle.idEngine = ?', [EngineParam.adresseMac]);  
        return result[0];
      } catch (error) {return {code: 400,error: error.sqlMessage}}
    }
  }
module.exports = EngineService.instance;