var mysql = require('mysql2/promise');
const config = require('./conf/default.json')

var mySqlPool = mysql.createPool({
    host: config.mysql.host || process.env.MYSQL_HOST,
    user: config.mysql.user || process.env.MYSQL_USER,
    password: config.mysql.password || process.env.MYSQL_PASSWORD,
    database: config.mysql.database ||  process.env.MYSQL_DATABASE,
    port: 3306,
    waitForConnections: true,
    connectionLimit: 1,
    multipleStatements: true,
    queueLimit: 0,
    namedPlaceholders: true
});

module.exports = mySqlPool;