const fsExtra = require('fs-extra');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Create an array to store the team members
const teamMembers = [];

// Function to add a manager
const addManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the manager's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the manager's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the manager's email:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number:",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamMembers.push(manager);
      menu();
    });
};

// Function to add an engineer
const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the engineer's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the engineer's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the engineer's email:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter the engineer's GitHub username:",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      menu();
    });
};

// Function to add an intern
const addIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the intern's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the intern's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the intern's email:",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the intern's school:",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      menu();
    });
};

// Function to generate the HTML
const generateHTML = () => {
    fsExtra.ensureDirSync(OUTPUT_DIR);
  fs.writeFileSync(outputPath, render(teamMembers));
};

// Main menu function
const menu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menuOption",
        message: "What would you like to do?",
        choices: [
          "Add an engineer",
          "Add an intern",
          "Finish building the team",
        ],
      },
    ])
    .then((userSelection) => {
      switch (userSelection.menuOption) {
        case "Add an engineer":
          addEngineer();
          break;
        case "Add an intern":
          addIntern();
          break;
        case "Finish building the team":
          generateHTML();
          break;
      }
    });
};

// Start the application
addManager();

// This code uses Inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints. It then calls the render function and passes in an array containing all employee objects, generates an HTML file using the HTML returned from the render function, and writes it to a file named team.html in the output folder.