// app.js
const express = require('express');
const bodyParser = require('body-parser');
const empModule = require('./empmodule');

const app = express();
// const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/EmployeeDetails.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const employeeId = req.body.employeeId;
    const employeeName = req.body.employeeName;
    const employeeAge = req.body.employeeAge;
    const employeeSalary = req.body.employeeSalary;

    // Create an employee object
    const employee = {
        employeeId,
        employeeName,
        employeeAge,
        employeeSalary,
    };

    // Add the employee to the employee array
    empModule.addEmployee(employee);

    // Display details in the browser (JSON format)
    res.json(empModule.getAllEmployees());
});

app.listen(8000, () => {
    console.log(`Server is running at port 8000`);
});
