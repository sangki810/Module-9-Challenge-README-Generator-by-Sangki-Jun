// function to generate markdown for README
function generateMarkdown(data) {
  return  `${data.license}
# ${data.title}

## Description
${data.description}

## Table of Contents
1. [Installations](#installations)
2. [Usage](#usage)
3. [Contributions](#contributions)
4. [Tests](#tests)
5. [License](#license)
6. [Questions](#questions)

## Installations
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contribution}

## Tests
${data.test}

## License
This project is licensed under:<br />
${data.license}<br />
&copy; all rights reserved by [${data.github}](https://github.com/${data.github})

## Questions
If you have any questions regarding this project, reach out to me via:
* GitHub: [${data.github}](https://github.com/${data.github})
* E-mail: [${data.email}](mailto:${data.email})
`;
}

// exports generateMarkdown
module.exports = generateMarkdown;
