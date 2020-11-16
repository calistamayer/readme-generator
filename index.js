const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown.js');


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
    console.log(fileName);
    console.log(data);
};

// function to initialize program
const init = () => {
    // prompt user with questions
    inquirer.prompt(questions).then((answers) => {
        const projectTitle = answers.title;
        console.log(`${projectTitle}.md`);
    });
}

// function call to initialize program
init();

// fs.writeFile('README.md', "hello", err => {
//     if (err) throw err;

//     console.log('README complete! Check out README.md to see the output!');
// });