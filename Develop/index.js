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
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        writeToFile('README.md', generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();
