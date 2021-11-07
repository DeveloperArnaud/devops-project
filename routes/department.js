const express = require('express')
const Router = express.Router();
const departmentController = require('../controllers/department')



Router.get('/departments', (req, res) => {
    departmentController.get(req, res)
});

Router.get('/departments/:id',(req, res) => {
    departmentController.getById(req, res)

});

module.exports = Router;