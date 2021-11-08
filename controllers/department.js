
const mySqlConnection = require('../connection')

const departmentController = {
    get : (req, res) =>  {
        mySqlConnection.query('SELECT * FROM DEPT', (err, rows, field) => {
            if(!err) {
                return res.json(rows)
            } else {
                return res.json(null)
            } 
        })
    },

    getById : (req, res) => {
        mySqlConnection.query('SELECT * FROM DEPT WHERE DID = ?',[req.params.id], (err, rows, field) => {
            if(!err){
                return res.json(rows)
            } else {
                return res.json(null)
            }
        })
    }

    
}

module.exports = departmentController;