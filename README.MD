This is a Playwright TypeScript test project for www.redmine.org website, using Allure Report

instructions:
install node on your system

install playwright and deps:
    npm init playwright@latest

install Allure report and dependencies with:
    npm install allure-commandline allure-playwright --save-dev

run tests:
    npx playwright test

generate Allure report:
    npx allure serve allure-results


Now i guess ill start writing some actual tests
Well, before that I want to test GitHub Actions adn actually try to push from the machine, where all 
Playwright browsers actually work with a commit to this readme.