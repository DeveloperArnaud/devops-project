
const mySqlPool = require('../connection')

const departmentController = {

    get : async (req, res) =>  {
        const query = "SELECT * FROM DEPT";
        const result = await mySqlPool.execute(query);
        return res.send(result[0]);
        
    },

    getById : async (req, res) =>  {
        const query = "SELECT * FROM DEPT WHERE DID = ?";
        const result = await mySqlPool.execute(query, [req.params.id]);
        return res.send(result[0]);
    },

    create: async(req, res) => {
        
        const dept ={
            did: req.body.did,
            dname : req.body.dname,
            dloc: req.body.dloc,
        };

        const query = `INSERT INTO DEPT(DID, DNAME, DLOC) VALUES(:did, :dname, :dloc)`;
        
        try {
            await mySqlPool.execute(query, dept);

        } catch(e) {

            throw e;
        }
        
        res.send('Dept inserted')
    }

}

module.exports = departmentController;