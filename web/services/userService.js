const config = require("../config.js");
const MYSQL = require("../models/Mysql");

class UserService {
    /*
        this.id = User.incrementId();
        this.socket = null;
        this.email = email;
        this.password = password;
        this.status = "enable";
    */
    userExist(userId){
        MYSQL.execute(
            'SELECT * FROM `user` WHERE `id` = ?',
            [0],
            function(err, results, fields) {
              console.log("results: ",results); // results contains rows returned by server
              //console.log("fields: ",fields); // fields contains extra meta data about results, if available
              if(results == null){
                console.error("err: ",err);
                return false;
              }
              else{

                  return true;
              }
            return results;
              // If you execute same statement again, it will be picked from a LRU cache
              // which will save query preparation time and give better performance
            }
          );
    }
    saveInDataBase(){
        this.userExist();
    }
    
}

module.exports = UserService;