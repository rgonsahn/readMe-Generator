// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using?',
        choices: [
            'MIT', 'Apache 2.0', 'GPL', 'None',
        ]
    },
    {
        type: 'input',
        name: 'description',
        message: 'What does your application do?',

    },
    {
        type: 'checkbox',
        name: 'table',
        message: 'What are the contents of your README.md file?',
        choices: [
            'Description', 'Installation', 'Usage', 'Contributions', 'Test', 'Questions',
        ]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the uses for the application?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How did you debug the code?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What is the url for your Github Pages?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What is the url for the project repo?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What is your email address?'

    },
    {
        type: 'input',
        name: 'Screenshot',
        message: 'Place the link to your screenshot here.'

    },
    {
        type: 'input',
        name: 'Screencast',
        message: 'What is the url for the screencast demo?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(
        path.join(__dirname, '/examples/', fileName), data
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!!
            console.log(answers)
            writeToFile('README.md', generateMarkdown(answers))
        })
}

// Function call to initialize app
init();




