const userService = require("../services/userService");
const User = require("../models/User");

function addUser(req, res) {
    const keyName=req.query.addUser;
    const michelleTheUser = new User("henrieAddUser@email.fr", "azerty");
    const service = new userService(michelleTheUser);
};



module.exports = addUser;