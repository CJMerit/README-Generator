// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./utils/generateMarkdown');

const licenses = [
    'None',
    'Apache license 2.0',
    'GNU General Public License v3.0',
    'MIT License',
    'BSD 2-clause "Simplified" license',
    'BSD 3-clause "New" or "Revised" license',
    'Boost Software License 1.0',
    'Creative Commons Zero v1.0 Universal',
    'Eclipse Public License 2.0',
    'GNU Affero General Public License v3.0',
    'GNU General Public License v2.0',
    'GNU Lesser General Public License v2.1',
    'Mozilla Public License 2.0',
    'The Unlicense'
]

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Give a short description of the project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the steps required for installation?',
        name: 'install'
    },
    {
        type: 'input',
        message: 'How do you use the project?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Which license are you using?',
        choices: licenses,
        name: 'license'
    },
    {
        type: 'input',
        message: 'How can people help contribute?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Are there any tests to run?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your Github profile name?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, `${generateMD(data)}`, (err) => 
    err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer 
        .prompt([
            questions[0],
            questions[1],
            questions[2],
            questions[3],
            questions[4],
            questions[5],
            questions[6],
            questions[7],
            questions[8]
        ])
        .then((response) => {
            writeToFile(`${response.title}.md`, response)
        })
}

// Function call to initialize app
init();
