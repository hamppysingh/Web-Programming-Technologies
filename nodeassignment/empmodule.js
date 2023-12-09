// empmodule.js
let employeeArray = [];

function addEmployee(employee) {
    employeeArray.push(employee);
}

function getAllEmployees() {
    return employeeArray;
}

module.exports = {
    addEmployee,
    getAllEmployees,
};
