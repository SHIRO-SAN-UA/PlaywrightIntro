This is a Playwright TypeScript test project for www.redmine.org website, using Allure Report

instructions:
install node on your system

install playwright and deps:
    npm init playwright@latest

install Allure report and dependencies with:
    npm install allure-commandline allure-playwright --save-dev

install Faker - random data generator
    npm install @faker-js/faker --save-dev

run tests:
    npx playwright test

generate Allure report:
    npx allure serve allure-results
