// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const generateMarkdown = require("./utils/generateMarkdown");



const questions = [
    {
    type : "input",
    name : "title",
    message : "Please enter your project's title."
    },
    {
    type : "input",
    name : "description",
    message : "Please enter your project's description."
    },
    {
    type : "input",
    name : "instructions",
    message : "Please enter your project's installation instructions."
    },
    {
    type : "input",
    name : "usage",
    message : "Please enter your project's usage information."
    },
    {
    type : "input",
    name : "username",
    message : "Please enter your GitHub username."
    },
    {
        type: "list",
        name: "license",
        message: "Please select your license type.",
        choices: ["MIT", "Apache", "GPL"]
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(response){
        console.log(response)
        writeToFile("README.md", generateMarkdown({...response}))
    })
}

// function call to initialize program
init();
