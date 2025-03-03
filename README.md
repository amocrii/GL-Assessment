**Cucumber Playwright Test Setup**

This project uses Cucumber for BDD (Behavior-Driven Development) testing with Playwright for browser automation. After running the tests, an HTML report is generated.

*Prerequisites*
Before running the tests, make sure you have the following installed:

Node.js (v20 or above)
npm (Node Package Manager)

If you don't have them installed, you can download Node.js from nodejs.org.


*Getting Started*

Run the following command to install all the necessary dependencies:

npm install

*Running the Tests*
To run the tests, execute one of the following commands:

npx cucumber-js
or
npm test


*Viewing the Report*
After generating the report, you can open it in any browser:

open reports/cucumber_report.html  # MacOS
start reports/cucumber_report.html  # Windows
xdg-open reports/cucumber_report.html  # Linux

The HTML report will display a detailed overview of all the test scenarios, including any failed tests with screenshots (if configured).