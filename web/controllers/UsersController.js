const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const AppController = require("./AppController.js");
const config = require("../config.js");

class UsersController extends AppController {
    disconnect() {

    }
}

module.exports = UsersController;