import { Given } from "cypress-cucumber-preprocessor/steps";
import { When } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";

Given('I am on the Google homepage', () => {
  const url = 'https://google.com'
  cy.visit(url)
})

When(`I search for "demo"`, () => {
  const text = "demo"
  cy.get('#searchform input[type=text]').type(text).type('{enter}')
  //cy.get('#searchform input[type=submit]:first-of-type').click()
})

Then(`I check the first search result`, () => {
  cy.get('#search > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > div:first-of-type > a:first-of-type').should('have.attr', 'href', 'https://en.wikipedia.org/wiki/Demo')

})
