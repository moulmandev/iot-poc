// get the client
const mysql = require('mysql2');
const config = require('../config.js');

const options = {
    host: config.database.host,
    user: config.database.user,
    database: config.database.database,
    password: config.database.password,
    port: config.database.port,

    connectionLimit: 2,
    waitForConnections: true,
    queueLimit: 0,
    keepAliveInitialDelay: 10000, // 0 by default.
    enableKeepAlive: true, // false by default.
};

class Mysql {
    static instance = new Mysql();

    constructor() {
        this.connection = mysql.createPool(options);
    }
}

module.exports = Mysql.instance.connection;