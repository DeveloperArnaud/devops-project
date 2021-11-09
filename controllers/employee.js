
const { render } = require('..');
const mySqlPool = require('../connection')

const employeeController = {

    get : async (req, res) =>  {
        const query = "SELECT * FROM EMP";
        const result = await mySqlPool.execute(query);
        return res.send(result[0]);
        
    },

    getById : async (req, res) =>  {
        const query = "SELECT * FROM EMP WHERE EID = ?";
        const result = await mySqlPool.execute(query, [req.params.id]);
        return res.send(result[0]);
    },

    create: async(req, res) => {
        /**
         *     DID     int,
    DNAME   varchar(20) not null,
    DLOC    varchar(30) not null,
         */
    }


}

module.exports = employeeController;