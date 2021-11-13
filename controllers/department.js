
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

            res.send(e.message)
        }
        
        res.send('Dept inserted')
    },

    delete: async(req, res) => {

        if(!req.params.id)
            return res.send("Must provide ID of dept")


        const query = `DELETE FROM DEPT WHERE DID = ?`;
        
        try {
            await mySqlPool.execute(query, [req.params.id]);

        } catch(e) {

            res.send(e.message)
        }
        
        res.send(`Dept${req.params.id} deleted`)
    },

    update: async(req, res) => {

        if(!req.params.id)
            return res.send("Must provide ID of dept")
        
            const dept = {

                dname : req.body.dname,
                dloc: req.body.dloc,
                
            };
    


        const query = `UPDATE FROM DEPT SET dname = :dname, dloc = :dloc WHERE DID = ?`;
        
        try {

            await mySqlPool.execute(query, dept,[req.params.id]);

        } catch(e) {

            res.send(e.message)
        }
        
        res.send(`Dept${req.params.id} deleted`)
    }

}

module.exports = departmentController;