const inquirer = require('inquirer');
// const express = require('express');


const start = {
    type: 'list',
    message: 'Welcome back Sinnister, how my I assist?',
    name: 'welcome',
    choices: [
        "view all departments", 
        "view all roles", 
        "view all employees", 
        "add a department", 
        "add a role", 
        "add an employee", 
        "remove a department",
        "remove a role",
        "remove an employee",
        "update an employee role"
    ]
};

const dep = {
    type: 'input',
    message: 'What department would you like to add Sinnister?',
    name: 'name'
};

const rol = [
    {
        type: 'input',
        message: 'What role would you like to add Sinnister?',
        name: 'title'
    },
    {
        type: 'number',
        message: 'What is their salary?',
        name: 'salary'
    },
    {
        type: 'number',
        message: 'Which department is this role for?',
        name: 'depId'
    }
];

const emp = [
    {
        type: 'input',
        message: "What is this person's first name Sinnister?",
        name: 'firnam'
    },
    {
        type: 'input',
        message: 'What is their last name?',
        name: 'lasnam'
    },
    {
        type: 'number',
        message: 'What role will they take?',
        name: 'role'
    },
    {
        type: 'number',
        message: "Who's their manager?",
        name: 'manager'
    }
];

const remdep = {
    type: 'number',
    message: 'Which department would you like to terminate?',
    name: "id"
};

const remrol = {
    type: 'number',
    message: 'Which role would you like to terminate?',
    name: "id"
};

const rememp = {
    type: 'number',
    message: 'Which employee would you like to terminate?',
    name: "id"
};

const update = [
    {
        type: 'input',
        message: "What is this employee's first name?",
        name: 'firnam'
    },
    {
        type: 'input',
        message: "What is this employee's last name?",
        name: 'lasnam'
    },
    {
        type: 'number',
        message: "What is this employee's role?",
        name: 'rol'
    },
    {
        type: 'number',
        message: "What is this employee's manager?",
        name: 'man'
    },
    {
        type: 'input',
        message: "What is this employee's id?",
        name: 'id'
    },
]

function output (responses){
    const db = require('./sever');

    if (responses == "view all departments"){
        db.query('SELECT * FROM tacker_db.department', function (err, results){
            console.table(results);
        });
    }

    else if (responses == "view all roles"){
        db.query('SELECT * FROM tacker_db.role', function (err, results){
            console.table(results);
        });
    }

    else if (responses == "view all employees"){
        db.query('SELECT * FROM tacker_db.employee', function (err, results){
            console.table(results);
        });
    }

    else if (responses == "add a department"){
        inquirer.prompt(dep).then(res => {
            console.table(res);
            db.query(`INSERT INTO department (name) VALUES("${res.name}")`, 
        function (err, results){
            console.table(results);
        });
        db.query('SELECT * FROM tacker_db.department', function (err, results){
            console.table(results);
        });
        })
    }

    else if (responses == "add a role"){
        inquirer.prompt(rol).then(res => {
            console.table(res);
            db.query(`INSERT INTO role (title, salary, department_id) 
            VALUES("${res.title}", ${res.salary}, ${res.depId})`, 
        function (err, results){
            console.table(results);
        });
        db.query('SELECT * FROM tacker_db.role', function (err, results){
            console.table(results);
        });
        })
    }

    else if (responses == "add an employee"){
        inquirer.prompt(emp).then(res => {
            console.table(res);
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) 
            VALUES("${res.firnam}", "${res.lasnam}", ${res.role}, ${res.manager})`, 
        function (err, results){
            console.table(results);
        });
        db.query('SELECT * FROM tacker_db.employee', function (err, results){
            console.table(results);
        });
        })
    }

    else if (responses == "remove a department"){
        db.query('SELECT * FROM tacker_db.department', function (err, results){
            console.table(results);
        });
        inquirer.prompt(remdep).then(res => {
            console.table(res);
            db.query(`DELETE FROM tacker_db.department WHERE id = ${res.id}`, 
        function (err, results){
            console.table(results);
        });
        })
    }

    else if (responses == "remove a role"){
        db.query('SELECT * FROM tacker_db.role', function (err, results){
            console.table(results);
        });
        inquirer.prompt(remrol).then(res => {
            console.table(res);
        db.query(`DELETE FROM tacker_db.role WHERE id = ${res.id}`, 
        function (err, results){
            console.table(results);
        });
        })
    }

    else if (responses == "remove an employee"){
        db.query('SELECT * FROM tacker_db.employee', function (err, results){
            console.table(results);
        });
        inquirer.prompt(rememp).then(res => {
            console.table(res);
        db.query(`DELETE FROM tacker_db.employee WHERE id = ${res.id}`, 
        function (err, results){
            console.table(results);
        });
        })
    }

    else if (responses == "update an employee role"){

        inquirer.prompt(update).then(res => {
            console.table(res);
            db.query(`UPDATE employee 
            SET first_name = '${res.firnam}', last_name = '${res.lasnam}', role_id = ${res.rol}, manager_id = ${res.man}
            WHERE id = ${res.id}`, function (err, results){
                console.table(results);
            });
        })
    }
}

function main (){
    inquirer.prompt(start).then(responses => {
        console.log(responses.welcome);
        (output(responses.welcome))
    });
    }
    
    main();
