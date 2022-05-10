const Regle = require("../models/Regle");
const MYSQL = require("../models/Mysql");
class RegleService {
    static instance = new RegleService();
    regleExist(id){
        MYSQL.execute(
            'SELECT * FROM `regle` WHERE `id` = ?',
            [id],
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
    create(Regle){
        if(!this.regleExist(Regle.id)){
            MYSQL.query('INSERT INTO regle (id,idEngine) VALUES (?)', [Regle.id,Regle.idEngine],
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
            console.error("The Rule already exist");
        }
    }
    saveNom(Regle){
        const regle = this.regleExist(Regle.id);
        if(regle){
            MYSQL.query('UPDATE regle SET nom = ? WHERE id = ?', [regle.nom,regle.id],
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
    saveStart(Regle){
        const regle = this.regleExist(Regle.id);
        if(regle){
            MYSQL.query('UPDATE regle SET start = ? WHERE id = ?', [regle.start,regle.id],
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
    saveEnd(Regle){
        const regle = this.regleExist(Regle.id);
        if(regle){
            MYSQL.query('UPDATE regle SET end = ? WHERE id = ?', [regle.end,regle.id],
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
    saveTemperature(Regle){
        const regle = this.regleExist(Regle.id);
        if(regle){
            MYSQL.query('UPDATE regle SET temperature = ? WHERE id = ?', [regle.temperature,regle.id],
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
}
module.exports = RegleService.instance;