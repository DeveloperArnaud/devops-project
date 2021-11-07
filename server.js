const mysql = require('mysql');
const express = require('express');

var app = express();

var mySqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Gwada97195",
    database: "devops-project",
    multipleStatements: true
}) 

mySqlConnection.connect((err) => {
    if(!err) {
        console.log("Connected")
    } else {
        console.log(err)
    }
    
})


app.listen(3000)
