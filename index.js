const { default: inquirer } = require("inquirer");

const inquirer = require(inquirer);

const start = {
    type: 'list',
    message: 'Welcome back Sinnister, how my I assist?',
    name: 'Sin',
    choices: [
        "view all departments", 
        "view all roles", 
        "view all employees", 
        "add a department", 
        "add a role", 
        "add an employee", 
        "update an employee role"
    ]
}