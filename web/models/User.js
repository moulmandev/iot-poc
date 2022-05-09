const config = require("../config.js");

class User {
    constructor(email,password) {
        this.id = User.incrementId();
        this.email = email;
        this.password = password;
        this.status = "enable";
    }
    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
    }
    connect(password){
        if(this.accountIsEnable()){
            if(password === this.password){
                //Connecte
            }
        }
    }
    disableAccount(){
        this.status = "disable"
    }
    enableAccount(){
        this.status = "enable";
    }
    accountIsEnable(){
        if (this.status === "enable"){
            return true;
        }
        return false;
    }
}

module.exports = User;