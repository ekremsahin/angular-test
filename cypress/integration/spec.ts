import { getButton, getGreeting } from "cypress/support/app.po"

describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    getGreeting().contains('H1 Test');
  });

  it('Should go through github site', () => {
    getButton().click();
  })
})
