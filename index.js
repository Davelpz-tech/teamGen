// npm package require ------------------------------------------------------
const {prompt} = require('inquirer');
const fs = require("fs");
// HTML template ------------------------------------------------------------
const generateHTML = require("./src/htmlTemplate");
// connect to employee's and roles ------------------------------------------
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
// empty array --------------------------------------------------------------
const teamArray = [];
// Questions for creating Manager -------------------------------------------
const inputManager = [
    {
        type: "input",
        message: "Manager's name: ",
        name: "name",
        validate: (userInput) => {
            if(userInput) {
                return true;
            } else {
                console.log("This is a required field");
                return false
            }
        }
    },
    {
        type: "input",
        message: "Manager's ID Number: ",
        name: "id",
        validate: (userInput) => {
            if(userInput) {
                return true;
            } else {
                console.log("This is a required field");
                return false
            }
        }
    },
    {
        type: "input",
        message: "Manager's email: ",
        name: "email",
        validate: (userInput) => {
            if(userInput) {
                return true;
            } else {
                console.log("This is a required field");
                return false
            }
        }
    },
];
// Questions for creating Engineer -------------------------------------------
const inputEngineer = [
    {
        type: "input",
        message: "Engineer's name: ",
        name: "name",
        validate: (userInput) => {
            if(userInput) {
                return true;
            } else {
                console.log("This is a required field");
                return false
            }
        }
    },
    {
        type: "input",
        message: "Engineer's ID Number: ",
        name: "id",
        validate: (userInput) => {
            if(userInput) {
                return true;
            } else {
                console.log("This is a required field");
                return false
            }
        }
    },
    {
        type: "input",
        message: "Engineer's email: ",
        name: "email",
        validate: (userInput) => {
            if(userInput) {
                return true;
            } else {
                console.log("This is a required field");
                return false
            }
        }
    },
];
// Questions for creating Intern -------------------------------------------
const inputIntern = [
    {
        type: "input",
        message: "Intern's name: ",
        name: "name",
        validate: (userInput) => {
            if(userInput) {
                return true;
            } else {
                console.log("This is a required field");
                return false
            }
        }
    },
    {
        type: "input",
        message: "Intern's ID Number: ",
        name: "id",
        validate: (userInput) => {
            if(userInput) {
                return true;
            } else {
                console.log("This is a required field");
                return false
            }
        }
    },
    {
        type: "input",
        message: "Intern's email: ",
        name: "email",
        validate: (userInput) => {
            if(userInput) {
                return true;
            } else {
                console.log("This is a required field");
                return false
            }
        }
    },
];
// Question for adding more team members
const addAnotherTeamMember = [
    {
        type: "list",
        message: "Would you like to add another team member?",
        name: "addAnotherTeamMember",
        choices: [
            "Engineer",
            "Intern",
            "No, I'm finished"
        ]
    }
];
// Function that will run through the questions and prompt the user for feedback
function beginPrompt() {
    prompt(inputManager).then((data) => {
        const manager = new Manager(data.name, data.id, data.email);
        teamArray.push(manager);
        return addTeamMemberToArr();
    });
}

function addEngineer() {
    prompt(inputEngineer).then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email);
        teamArray.push(engineer);
        return addTeamMemberToArr();
    });
}

function addIntern() {
    prompt(inputIntern).then((data) => {
        const intern = new Intern(data.name, data.id, data.email);
        teamArray.push(intern);
        return addTeamMemberToArr();
    });
}

function addTeamMemberToArr() {
    prompt(addAnotherTeamMember).then((data) => {
        if(data.addAnotherTeamMember === "Engineer") {
            addEngineer();
        } else if (data.addAnotherTeamMember === "Intern") {
            addIntern();
        } else {
            console.log(teamArray);

            writeFile("./dist/index.html", employeeHTML);
        }
    })
}

beginPrompt();
module.exports = [teamArray];

// write HTML file ----------------------------------------------------------
function writeFile(file, employeeHTML) {
    fs.writeFile(file, employeeHTML, err => {
        if(err) {
            console.log("there was an error", err);
            return;
        }
    });
}