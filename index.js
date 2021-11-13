const express = require('express');
const employeeRoutes = require('./routes/employee')
const departmentRoutes = require('./routes/department')
const port = 3000;
const bodyParser = require('body-parser');
const client = require('./connection')


const app = express();

app.use(bodyParser.json());



client.on('error', (err) => {
    console.log(err)
})

app.get('/', (req, res) => {
    res.send('Hello World')
})


app.use('/employees', employeeRoutes);
app.use('/departments', departmentRoutes)




app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})

module.exports = app
