// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions for your proeject?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage information for your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution quidelines for your project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are the test instructions for your project?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'What is type of license you want for your project?',
        choices: [
            {
                name: "none",
                value: "No License has been provided for this project.",
            },
            {
                name: "MIT",
                value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
            },
            {
                name: "Apache 2.0",
                value: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
            },
            {
                name: "Mozilla Public 2.0",
                value: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
            },
            {
                name: "GNU GPL v3",
                value: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
            },
            {
                name: "Eclipse",
                value: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
            },
            {
                name: "The Unlicense",
                value: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
            },
        ],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address? (format: example@email.com)',
        name: 'email',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
    })
}

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers)
        const stringTemplate = generateMarkdown(answers)

        writeToFile("README.md", stringTemplate)
    })
}

// function call to initialize app
init();
