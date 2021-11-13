const express = require('express');
const Router = express.Router();
const employeeController = require('../controllers/employee')



// Get all employees
Router.get("/", (req, res) => {
    employeeController.get(req, res);
});

//Get employee by ID
Router.get('/:id', (req, res) => {
    employeeController.getById(req, res)
})

Router.post('/create-emp', (req, res) => {
    employeeController.create(req, res)
})


Router.put('/update-emp/:id', (req, res) => {
    employeeController.update(req, res)
})





module.exports = Router;