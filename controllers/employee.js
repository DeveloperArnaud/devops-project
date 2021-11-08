
const mySqlConnection = require('../connection')

const employeeController = {
    get : (req, res) =>  {
        mySqlConnection.query('SELECT * FROM EMP', (err, rows, field) => {
            if(!err) {
                return res.json(rows)
            } else {
                return res.json(null)
            } 
        })
    },

    getById : (req, res) => {
        mySqlConnection.query('SELECT * FROM EMP WHERE EID = ?',[req.params.id], (err, rows, field) => {
            if(!err){
                return res.json(rows)
            } else {
                return res.json(null)

            }
        })
    }

}

module.exports = employeeController;