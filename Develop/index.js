// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
}, {
    type: 'input',
    name: 'description',
    message: 'Give a brief description of your project?'
}, {
    type: 'list',
    name: 'license',
    message: 'What license does your project have?',
    choices: ['MIT', 'GNU', 'APACHE', 'ISC', 'No license']
}, {
    type: 'input',
    name: 'installation',
    message: 'What type of package did you install?'
}, {
    type: 'input',
    name: 'usage',
    message: 'What usage information is required?'
}, {
    type: 'input',
    name: 'tests',
    message: 'What type of test are required?'
}, {
    type: 'input',
    name: 'contributing',
    message: 'How many contributions have been made?'
}, {
    type: 'input',
    name: 'email',
    message: 'Enter your email address.'
}, {
    type: 'input',
    name: 'github',
    message: 'What is your github?'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileToWrite = path.join(process.cwd(), fileName)
    fs.writeFileSync(fileToWrite, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        const markdown = generateMarkdown(answers)
        writeToFile('README.md', markdown)
    })
}

// Function call to initialize app
init();
