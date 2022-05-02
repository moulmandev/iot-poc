const jwt = require("jsonwebtoken");
const config = require("../config.js");

class AppController {
    constructor(callback, socket, token) {
        this.callback = callback;
        this.socket = socket;

        let payload = this.verifyAuth(token);
        if (!payload) return this.callback({code:"NOT_AUTHENTICATED", data:{}});
    }

    verifyAuth(token) {
        let decode = jwt.decode(token, config.jwt_key);
        if (!decode)
            return null;
        return decode;
    }
}

module.exports = AppController;