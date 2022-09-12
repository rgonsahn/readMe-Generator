// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function myLicense(license) {
  switch (license) {
    case 'MIT':
      license = '![MIT](https://img.shields.io/badge/license-MIT-blue)';
      break;
    case 'Apache 2.0':
      license = '![Apache]https://img.shields.io/badge/license-Apache%202.0-yellowgreen';
      break;
    case 'GPL':
      license = '![GPL]https://img.shields.io/badge/license-GPL-red';
      break;
    case '':
      license = "";
      break;
    default:
      license = "invalid license"
  }
  return license
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// var renderLicenseLink;
// switch (renderLicenseLink) {
//   case 1:
//     renderLicenseLink = 
// break;
//   case 2:
//     renderLicenseLink = 
//   break;
//   case 3:
//     renderLicenseLink =
//     break;
//   case 4:
//     renderLicenseLink =
//       break;


// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## License
${myLicense(data.license)}
***
## Description
${data.description}
***
## Table of Contents
${data.table}
## Installation 
To install this application you will need to install the following dependencies and packages:
${data.installation}
***
## Usage
The application includes the following features:
* ${data.usage}
***
## Questions
${data.questions} 
***
${data.questions} 
***
## Test
The following test were ran to debug the application:
${data.test}
***
## Contributions
You can contribute to this project by:
${data.contributing}
***
## 
${data.Screenshot}
***
## Screencast Link
${data.Screencast}

`;

}

module.exports = generateMarkdown;

