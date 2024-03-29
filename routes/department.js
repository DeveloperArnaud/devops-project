const express = require('express')
const Router = express.Router();
const departmentController = require('../controllers/department')



Router.get('/', (req, res) => {
    departmentController.get(req, res)
});

Router.get('/:id',(req, res) => {
    departmentController.getById(req, res)
});

Router.post('/create-dept', (req, res) => {
    departmentController.create(req, res)
})

Router.delete('/delete-dept/:id', (req, res) => {
    departmentController.delete(req, res)
})

Router.put('/update-dept/:id', (req, res) => {
    departmentController.update(req, res)
})

module.exports = Router;