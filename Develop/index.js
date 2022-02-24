// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'name',
    message: 'What is your name?'
}, {
    type: 'input',
    name: 'location',
    message: 'Where are you from?'
}, {
    type: 'input',
    name: 'university',
    message: 'What do you study?'
}];

console.log(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
