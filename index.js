const inquirer = require('inquirer');
const fs = require('fs')

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
    //this is just using a small bit of data to give you an idea of how to get started
    const readme = `# ${data.title} \n ## ${data.description}`

    fs.writeFile(fileName, readme, (err) => {
        if(err) return console.log(`error writing file ${err}`)
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile('readme.md', answers);
    })
}

// function call to initialize program
init();
