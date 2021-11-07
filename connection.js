var mysql = require('mysql');
const config = require('./conf/default')
require('dotenv').config()

var mySqlConnection = mysql.createConnection({
    host: config.mysql.host || process.env.DB_HOST,
    user: config.mysql.user || process.env.DB_USER,
    password: config.mysql.password || process.env.DB_USER,
    database: config.mysql.database || process.env.DB_USER,
    multipleStatements: true
})


mySqlConnection.connect((err) => {
    if(!err) {
        console.log("Connected")
    } else {
        console.log(err)
    }
    
})

module.exports = mySqlConnection;