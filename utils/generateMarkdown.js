// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

![license](https://img.shields.io/badge/license-${data.license}-blue.svg)

> ${data.description}

> ${data.installation}

> ${data.usage}

> ${data.tests}

### ${data.contributors}

## Questions

### ${data.username}

### ${data.link}

### ${data.email}

`;
}

module.exports = generateMarkdown;
