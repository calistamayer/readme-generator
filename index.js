const inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter application name (project title)'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter application description'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter application installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter application usage instructions'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter application contribution guidelines'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter application test instructions'
    },
    {
        type: 'input',
        name: 'reporting',
        message: 'Enter application error reporting process'
    },
    { 
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    },
    {
        type: 'input',
        name: 'user',
        message: 'Enter your Github username'
    }
];


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    return inquirer.prompt(questions);
}

// function call to initialize program
init();
