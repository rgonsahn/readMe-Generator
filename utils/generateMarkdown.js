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
## Description
${data.description}
## Installation 
To install this application you will need to install the following dependencies and packages:
${data.installation}
## Features 
The application includes the following features:
* ${data.features}
* ${data.features}
* ${data.features}
* ${data.features} 
## Check it out on Github! 
${data.githubPages} 
## Repository Link 
${data.Project_Repo} 
## ${data.Screenshot}
## Other Links 
${data.Screencast}

`;

}

module.exports = generateMarkdown;

