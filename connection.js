var mysql = require('mysql2');
const config = require('./conf/default')
require('dotenv').config()

var mySqlConnection = mysql.createConnection({
    host: config.mysql.host || process.env.DB_HOST,
    user: config.mysql.user || process.env.DB_USER,
    password: config.mysql.password || process.env.DB_PASSWORD,
    database: config.mysql.database || process.env.DB_DATABASE,
    port: 3000,
    multipleStatements: true
})


mySqlConnection.connect((err) => {
    if(!err) {
        console.log("Listening in port 3000")
    } else {
        console.log(err)
    }
})

module.exports = mySqlConnection;