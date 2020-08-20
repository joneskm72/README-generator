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
    name : "installation",
    message : "Please enter your project's installation instructions."
    },
    {
    type : "input",
    name : "usage",
    message : "Please enter your project's usage information."
    },
    {
    type : "input",
    name : "contributing",
    message : "Please enter your project's contributors."
    },
    {
    type : "input",
    name : "tests",
    message : "Please enter information on how to test your projects."
    },
    {
    type : "input",
    name : "username",
    message : "Please enter your GitHub username."
    },
    {
    type : "input",
    name : "link",
    message : "Please enter your GitHub URL." 
    },
    {
    type : "input",
    name : "email",
    message : "Please enter your email address."
    },
    {
    type : "input",
    name : "application-link",
    message : "Please enter your deployed application link."
    }
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
