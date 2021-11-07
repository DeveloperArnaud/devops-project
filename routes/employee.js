const express = require('express');
const Router = express.Router();
const employeeController = require('../controllers/employee')
const mySqlConnection = require('../connection')


// Get all employees
Router.get("/employees", (req, res) => {
    employeeController.get(req, res);
});

//Get employee by ID
Router.get('/employees/:id', (req, res) => {
    employeeController.getById(req, res)
})




module.exports = Router;