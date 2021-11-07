
const mySqlConnection = require('../connection')

const employeeController = {
    get : (req, res) =>  {
        mySqlConnection.query('SELECT * FROM DEPT', (err, rows, field) => {
            if(!err) {
                res.send(rows)
                console.log(rows)
            } else {
                res.send(null)
                console.log(err)
            } 
        })
    },

    getById : (req, res) => {
        mySqlConnection.query('SELECT * FROM DEPT WHERE DID = ?',[req.params.id], (err, rows, field) => {
            if(!err){
                res.send(rows)
                console.log(rows)
            } else {
                res.send(null)
                console.log(err)
            }
        })
    }

    
}

module.exports = employeeController;