import { Given } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";

Given('I am on the Google homepage', () => {
  const url = 'https://google.com'
  cy.visit(url)
})

When(`I search for {string}`, (text) => {
  cy.get('#searchform input[type=text]').type(text)
  cy.get('#searchform input[type=submit]:first-of-type').first().click()
})

Then(`I check the first search result has URL {string}`, (url) => {
  cy.get('#search a:first-of-type').first().should('have.attr', 'href', url)
})
