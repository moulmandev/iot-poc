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
}
module.exports = RegleService.instance;