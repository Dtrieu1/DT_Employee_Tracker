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
    console.log(answers.Options)
    switch(answers.Options)
    {
      case 'View All Employees':
        viewAllEmployees()
        break;
      case 'View All Departments':
        viewAllDepartments()
        break;
      case 'View All Roles':
        viewAllRoles()
        break;
       case 'Add an Employee':
        addEmployee()
        break;
      case 'Update an Employee Role':
        updateEmployee()
        break;
      case 'Add a Department':
        addDepartment()
        break;
      case 'Add a Role':
        addRole()
        break;
    }
  });
}

init();

function viewAllEmployees() {
  let sqlQuery = 'SELECT * FROM employee'; 
  db.query(sqlQuery, (err,res) =>
  {
    console.table(res);
    init();
  })}

 function viewAllDepartments() {
    let sqlQuery = 'SELECT * FROM department'; 
    db.query(sqlQuery, (err,res) =>
    {
      console.table(res);
      init();
    })}
  function viewAllRoles() {
    let sqlQuery = 'SELECT * FROM roles'; 
    db.query(sqlQuery, (err,res) =>
    {
      console.table(res);
      init();
    })}
 function addDepartment(){
  const info = {
    type: "input",
    message: "What do you want the name of department to be?",
    name: "newDepartment",
  }
  inquirer.prompt(info).then((answers) =>{
    console.log(answers)
    console.log(answers.newDepartment)
    let sqlQuery = `INSERT INTO department (name) VALUES ('${answers.newDepartment}')`;
    console.log(sqlQuery)
    db.query(sqlQuery, (err,res) =>
    {
      if (err) throw err;
      console.log(`${answers.newDepartment} has now been added to the database!`)
      init();
    })
  })
 }
 function addRole(){
  const info = [
   {
    type: "input",
    message: "What job title is it?",
    name: "newTitle",
   },
   {
    type: "input",
    message: "What salary is this job?",
    name: "newSalary",
   },
   {
    type: "input",
    message: "What is the department id for this job?",
    name: "newDepartment",
   }
  ]
  inquirer.prompt(info).then((answers) =>{
    let sqlQuery = `INSERT INTO roles (title, salary, department_id) VALUES ('${answers.newTitle}', '${answers.newSalary}', '${answers.newDepartment}')`;
    db.query(sqlQuery, (err,res) =>
    {
      console.log(`${answers.newTitle} has now been added to the database!`)
      init();
    })
  })
 }

 function addEmployee(){
  const info = [
   {
    type: "input",
    message: "What is the first name of the employee?",
    name: "firstName",
   },
   {
    type: "input",
    message: "What is the last name of the employee?",
    name: "lastName",
   },
   {
    type: "input",
    message: "What is the role id of the employee?",
    name: "RoleID",
   },
   {
    type: "input",
    message: "What is the manager id of this employee?",
    name: "Manager",
   }
  ]
  inquirer.prompt(info).then((answers) =>{
    let sqlQuery = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${answers.firstName}', '${answers.lastName}', ${answers.RoleID}, ${answers.Manager})`;
    db.query(sqlQuery, (err,res) =>
    {
      console.log(`${answers.firstName} has now been added to the database!`)
      init();
    }
    )
  })
  
 }
    function updateEmployee(){
      db.query("SELECT title FROM roles", (err,res)=>{
        console.log(res[0].title);
        console.table(res);
        init();
      }
      )
    }
