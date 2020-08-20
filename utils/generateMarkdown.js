// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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

`;
}

module.exports = generateMarkdown;
