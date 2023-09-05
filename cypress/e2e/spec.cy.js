/// <reference types="cypress" />

it('types placeholders into the form', () => {
  cy.visit('index.html')
  const name = cy.get('#firstname').invoke('prop', 'placeholder')
  cy.get('#firstname').type(name)
  const email = cy.get('#email').should('have.prop', 'placeholder')
  cy.get('#email').type(email)
  cy.get('#cemail').type(email)
  cy.get('input[type=submit]').click().should('have.value', 'Success!')
})
