// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of contents
  * [License](#license)
  * [Description](#description)
  * [How to Install](#installation)
  * [How to Use](#usage)
  * [Testing](#testing)
  * [Contributors](#contributors)
  * [Questions?](#questions)
  * [Deployed Application Link](#deployed-application-link)

## License:

![license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Description:

> ${data.description}

## How to Install:

> ${data.installation}

## How to Use:
> ${data.usage}

## Testing:

> ${data.tests}

## Contributors:

### ${data.contributors}

## Questions?

### ${data.username}

### ${data.link}

### ${data.email}

## Deployed Application Link:

### ${data.application-link}

`;
}

module.exports = generateMarkdown;
