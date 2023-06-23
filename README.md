# CypressTest

This repository contains a simple Cypress framework with some automated test scripts

## Prerequisites
- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

Clone this repository:
```sh
git clone <repository-url>
```

Navigate to the project directory:
```sh
cd CypressTest
```

Install the project dependencies:
```sh
npm install
```

## Configuration
Update the cypress.config.json file to configure Cypress options such as the base URL.

## Framework Components
- Components - contains a section of the page that can be reused by other pages
- e2e - contains the automated test scripts
- fixtures - contains the test data that will be used by the scripts
- pages - contains the page classes for the application

## Running Tests

To open the Cypress Test Runner:

In terminal

```sh
npm run cypress:open
```
or

```sh
npx cypress open
```

>This command opens the Cypress Test Runner, where you can select and run test files or test suites.

To run tests in headless mode (without the Test Runner):

```sh
npm run cypress:run
```
or

```sh
npx cypress run
```

>This command runs all the Cypress tests in the terminal without opening the Test Runner. The test results will be displayed in the terminal.

## Browser used
- chrome
  
## Test Cases covered
- Validate Search functionality of Amazon.com
- Validate Add to Cart functionality
