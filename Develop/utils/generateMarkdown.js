// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'Apache license 2.0':
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    case 'GNU General Public License v3.0':
      return '![License](https://img.shields.io/badge/License-GNU_General_Public_License_v3.0-blue.svg)'
    case 'MIT License':
      return '![License](https://img.shields.io/badge/License-MIT_License-blue.svg)'
    case 'BSD 2-clause "Simplified" license':
      return '![License](https://img.shields.io/badge/License-BSD_2--Clause-blue.svg)';
    case 'BSD 3-clause "New" or "Revised" license':
      return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
    case 'Boost Software License 1.0':
      return '![License](https://img.shields.io/badge/License-Boost_1.0-blue.svg)';
    case 'Creative Commons Zero v1.0 Universal':
      return '![License](https://img.shields.io/badge/License-Creative_Commons_Zero_v1.0-blue.svg)';
    case 'Eclipse Public License 2.0':
      return '![License](https://img.shields.io/badge/License-Eclipse_Public_License_2.0-blue.svg)'
    case 'GNU Affero General Public License v3.0':
      return '![License](https://img.shields.io/badge/License-GNU_Affero_General_Public_License_v3.0-blue.svg)'
    case 'GNU General Public License v2.0':
      return '![License](https://img.shields.io/badge/License-GNU_General_Public_License_v2.0-blue.svg)'
    case 'GNU Lesser General Public License v2.1':
      return '![License](https://img.shields.io/badge/License-GNU_Lesser_General_Public_License_v2.1-blue.svg)'
    case 'Mozilla Public License 2.0':
      return '![License](https://img.shields.io/badge/License-Mozilla_Public_License_2.0-blue.svg)'
    case 'The Unlicense':
      return '![License](https://img.shields.io/badge/License-The_Unlicense-blue.svg)'
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
  case 'Apache license 2.0':
      return '(https://opensource.org/licenses/Apache-2.0)';
  case 'GNU General Public License v3.0':
      return '(https://opensource.org/licenses/GPL-3.0)'
  case 'MIT License':
      return '(https://opensource.org/licenses/MIT)'
  case 'BSD 2-clause "Simplified" license':
      return '(https://opensource.org/licenses/BSD-2-Clause)';
  case 'BSD 3-clause "New" or "Revised" license':
      return '(https://opensource.org/licenses/BSD-3-Clause)';
  case 'Boost Software License 1.0':
      return '(https://opensource.org/licenses/BSL-1.0)';
  case 'Creative Commons Zero v1.0 Universal':
      return '(https://creativecommons.org/publicdomain/zero/1.0/)';
  case 'Eclipse Public License 2.0':
      return '(https://opensource.org/licenses/EPL-2.0)'
  case 'GNU Affero General Public License v3.0':
      return '(https://opensource.org/licenses/AGPL-3.0)'
  case 'GNU General Public License v2.0':
      return '(https://opensource.org/licenses/GPL-2.0)'
  case 'GNU Lesser General Public License v2.1':
      return '(https://opensource.org/licenses/LGPL-2.1)'
  case 'Mozilla Public License 2.0':
      return '(https://opensource.org/licenses/MPL-2.0)'
  case 'The Unlicense':
      return '(https://opensource.org/licenses/unlicense)'
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license){
    case 'Apache license 2.0':
        return '(https://opensource.org/licenses/Apache-2.0)';
    case 'GNU General Public License v3.0':
        return '(https://opensource.org/licenses/GPL-3.0)'
    case 'MIT License':
        return '(https://opensource.org/licenses/MIT)'
    case 'BSD 2-clause "Simplified" license':
        return '(https://opensource.org/licenses/BSD-2-Clause)';
    case 'BSD 3-clause "New" or "Revised" license':
        return '(https://opensource.org/licenses/BSD-3-Clause)';
    case 'Boost Software License 1.0':
        return '(https://opensource.org/licenses/BSL-1.0)';
    case 'Creative Commons Zero v1.0 Universal':
        return '(https://creativecommons.org/publicdomain/zero/1.0/)';
    case 'Eclipse Public License 2.0':
        return '(https://opensource.org/licenses/EPL-2.0)'
    case 'GNU Affero General Public License v3.0':
        return '(https://opensource.org/licenses/AGPL-3.0)'
    case 'GNU General Public License v2.0':
        return '(https://opensource.org/licenses/GPL-2.0)'
    case 'GNU Lesser General Public License v2.1':
        return '(https://opensource.org/licenses/LGPL-2.1)'
    case 'Mozilla Public License 2.0':
        return '(https://opensource.org/licenses/MPL-2.0)'
    case 'The Unlicense':
        return 'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
      default:
        return '';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  [${renderLicenseBadge(data.license)}]${renderLicenseLink(data.license)}
  
  ## Description
  ${data.description}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  To find out how to contribute:
  ${data.contribution}

  ## Questions
  ![Github](https://github.com/${data.github}/)
  ![${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
