// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

> ${data.description}

> ${data.installation}

> ${data.usage}

### ${data.username}

![license](https://img.shields.io/badge/license-${data.license}-blue.svg)

`;
}

module.exports = generateMarkdown;
