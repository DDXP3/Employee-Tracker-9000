const inquirer = require('inquirer');
const db = require('./sever')

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
        type: 'input',
        message: "Who's their manager?",
        name: 'manager'
    }
];

function output (responses){
    if (responses == "view all departments"){
        db.query('SELECT * FROM tacker_db.department', function (err, results){
            console.log(results);
        });
    }

    else if (responses == "view all roles"){
        db.query('SELECT * FROM tacker_db.role', function (err, results){
            console.log(results);
        });
    }

    else if (responses == "view all employees"){
        db.query('SELECT * FROM tacker_db.employee', function (err, results){
            console.log(results);
        });
    }

    else if (responses == "add a department"){
        inquirer.prompt(dep).then(res => {
            console.log(res);
        })
        db.query(`INSERT INTO department (name) VALUES(${res})`, 
        function (err, results){
            console.log(results);
        });
    }

    else if (responses == "add a role"){
        inquirer.prompt(rol).then(res => {
            console.log(res);
        })
        db.query(`INSERT INTO role (title, salary, department_id) VALUES${res}`, 
        function (err, results){
            console.log(results);
        });
    }

    else if (responses == "add an employee"){
        inquirer.prompt(emp).then(res => {
            console.log(res);
        })
        db.query(`INSERT INTO employess (first_name, last_name, role_id, manager_id) VALUES${res}`, 
        function (err, results){
            console.log(results);
        });
    }

    else if (responses == "update an employee role"){
        db.query('SELECT * FROM tacker_db.employee', function (err, results){
            console.log(results);
        });
    }
}

function main (){
    inquirer.prompt(start).then(responses => {
        console.log(responses.welcome);
    });
    }
    
    main();

    // output(responses.welcome);