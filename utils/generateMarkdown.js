// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)
  [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}

  ${data.reporting}

  ## Questions

  This application was created by [${data.user}](https://github.com/${data.user}).

  Contact creator via email at ${data.email} with additional questions. 

`;
}

module.exports = generateMarkdown;
