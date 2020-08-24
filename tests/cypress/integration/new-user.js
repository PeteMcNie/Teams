/* global cy */

describe('New User loads home page', () => {
  beforeEach(() => {
    // reset and seed the database prior to every test
    cy.exec('npm run db:reset && npm run db:seed')
  })
  it('loads successfully', () => {
    cy.visit('/')
    cy.get('h1')
      .contains('Teams')

    cy.get('a')
      .contains('Create Teams')

    cy.get('a')
      .contains('Add New People')

    cy.get('div')
      .contains('P. R. McNie')
  })

  it('goes to add new people page', () => {
    cy.contains('Add New People')
      .click()
  })

  it('loads add new people page correctly', () => {
    cy.get('button')
      .contains('Add Person')

    cy.get('button')
      .contains('Submit')

    cy.get('a')
      .contains('Create Teams')

    cy.get('a')
      .contains('Home')
  })

  it('checks add new people and remove buttons work', () => {
    cy.contains('Add Person')
      .click()

    cy.contains('Add Person')
      .click()

    cy.get('button')
      .contains('Remove')

    cy.contains('Remove')
      .click()
  })

  it('Adds new person and selects them for final team', () => {
    cy.get('form').within(() => {
      cy.get('input:first').should('have.attr', 'placeholder', 'Name')
    })
      .type('Pablo')

    cy.contains('Submit')
      .click()

    cy.contains('Create Teams')
      .click()

    cy.get('.action-checkboxes [disabled]')
      .check({ force: true }).should('be.checked')

    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]')
      .check().should('be.checked')
  })
})
