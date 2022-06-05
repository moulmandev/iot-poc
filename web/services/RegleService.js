const Regle = require("../models/Regle");
const MYSQL = require("../models/Mysql");
class RegleService {
    static instance = new RegleService();

    async create(RegleParam){
        console.log(RegleParam);
        const MYSQLpromise = MYSQL.promise();
        try {
          const result = await MYSQLpromise.execute('INSERT INTO regle (id,idEngine) VALUES (?)', [RegleParam.id,RegleParam.idEngine]);  
        return { code: 200 }
        } catch (error) {return {code: 400,error: error.sqlMessage}}
      }
    
      async delete(RegleParam){
        const MYSQLpromise = MYSQL.promise();
        try {
          const result = await MYSQLpromise.execute('DELETE FROM regle WHERE id = ?', [RegleParam.id]);  
        return { code: 200 }
        } catch (error) {return {code: 400,error: error.sqlMessage}}
      }

      async saveNom(RegleParam){
        const MYSQLpromise = MYSQL.promise();
        try {
          const result = await MYSQLpromise.execute('UPDATE regle SET nom = ? WHERE id = ?', [RegleParam.nom,RegleParam.id]);  
        return { code: 200 }
        } catch (error) {return {code: 400,error: error.sqlMessage}}
      }

     
      async saveStart(RegleParam){
        const MYSQLpromise = MYSQL.promise();
        try {
          const result = await MYSQLpromise.execute('UPDATE regle SET start = ? WHERE id = ?', [RegleParam.start,RegleParam.id]);  
        return { code: 200 }
        } catch (error) {return {code: 400,error: error.sqlMessage}}
      }
      async saveEnd(RegleParam){
        const MYSQLpromise = MYSQL.promise();
        try {
          const result = await MYSQLpromise.execute('UPDATE regle SET end = ? WHERE id = ?', [RegleParam.end,RegleParam.id]);  
        return { code: 200 }
        } catch (error) {return {code: 400,error: error.sqlMessage}}
      }

        
      async saveTemperature(RegleParam){
        const MYSQLpromise = MYSQL.promise();
        try {
          const result = await MYSQLpromise.execute('UPDATE regle SET temperature = ? WHERE id = ?', [RegleParam.temperature,RegleParam.id]);  
        return { code: 200 }
        } catch (error) {return {code: 400,error: error.sqlMessage}}
      }
}
module.exports = RegleService.instance;