// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, license2, license3, license4) {
  return license ? '![MIT](https://img.shields.io/badge/license-MIT-blue)' :
    license2 ? '![Apache]https://img.shields.io/badge/license-Apache%202.0-yellowgreen' :
      license3 ? '![GPL]https://img.shields.io/badge/license-GPL-red' :
        license4 ? "" :
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
