var mysql = require('mysql');
const config = require('./conf/default')

var mySqlConnection = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
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