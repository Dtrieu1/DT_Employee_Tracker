const mysql = require("mysql2");
const inquirer = require("inquirer");

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'department_db'
  },
  console.log(`Connected to the department_db database.`)
);

const questions = [
  {
    type: "list",
    message: "What action would you like to take within this database?",
    name: "Options",
    choices: [
        //Show Employee ID, First Name, Last Name, Job Titile, Department, Salary, and Reporting Manager
        "View All Employees",
        //Show Department Names and Department IDs
        "View All Departments",
        //Show Job Title, Role ID, Department, Salary for the role
        "View All Roles",
        //Prompt Employee First Name, Last Name, Role, Reporting Manager --> Add to DB
        "Add an Employee",
        //Prompt user to select specific employee for only role --> Update to DB 
        "Update an Employee Role",
        //Prompt department name --> Add to DB
        "Add a Department",
        //Prompt Role Name, Salary, Department --> Add to DB
        "Add a Role",
    ],
    default: "Not Provided",
  },
];

function init(){
  inquirer.prompt(questions).then((answers) => {
    
  });
}

init();

