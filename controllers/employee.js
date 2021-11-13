
const e = require('express');
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

        if(!req.body.eid) 
            return res.send(null)
        
        const emp = {
            eid: req.body.eid,
            ename : req.body.ename,
            job: req.body.job,
            mgr: req.body.mgr,
            hired: req.body.hired,
            sal: req.body.sal,
            comm: req.body.comm,
            did: req.body.did
        };

        const query = `INSERT INTO EMP(EID, ENAME, JOB, MGR, HIRED, SAL, COMM, DID) VALUES(:eid, :ename, :job, :mgr, :hired, :sal, :comm, :did )`;
        
        try {

            await mySqlPool.execute(query, emp);

        } catch(e) {

            throw e;
        }
        
        res.send('Emp inserted')
    },

    update: async(req, res) => {
        
        if(!req.params.id)
            return res.send("Must provide ID of emp")
        
            const emp = {
                ename : req.body.ename,
                job: req.body.job,
                mgr: req.body.mgr,
                hired: req.body.hired,
                sal: req.body.sal,
                comm: req.body.comm,
                did: req.body.did
            };


        const query = `UPDATE EMP SET ename = ?, job = ?, mgr= ?, hired = ?, sal = ?, comm = ?, did = ? WHERE EID = ?`;
        
        try {

            await mySqlPool.execute(query, [emp.ename,emp.job, emp.mgr, emp.hired, emp.sal, emp.comm, emp.did , req.params.id]);

        } catch(e) {

            res.send(e.message)
        }
        
        res.send(`Emp ${req.params.id} updated`)
    }



}

module.exports = employeeController;