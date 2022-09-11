// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var license;
switch (licenseType) {
  case 1:
    license = '![MIT](https://img.shields.io/badge/license-MIT-blue)';
    break;
  case 2:
    license = '![Apache]https://img.shields.io/badge/license-Apache%202.0-yellowgreen';
    break;
  case 3:
    license = '![GPL]https://img.shields.io/badge/license-GPL-red';
    break;
  case 4:
    license = "";
    break;
    default:
      license = "invalid license"
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![MIT](https://img.shields.io/badge/license-MIT-blue)
`;
}

module.exports = generateMarkdown;

