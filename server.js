const express = require('express');
const employeeRoutes = require('./routes/employee')
const departmentRoutes = require('./routes/department')


var app = express();




app.use("/", employeeRoutes);
app.use("/", departmentRoutes)




app.listen(3000)
