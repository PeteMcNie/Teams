/* global cy */

describe('Past User visits site', () => {
  beforeEach(() => {
    // reset and seed the database prior to every test
    cy.exec('npm run db:reset && npm run db:seed')
  })
  it('loads successfully', () => {
    cy.visit('/')

    cy.contains('Create Teams')
      .click()

    cy.get('p')
      .contains('Pick team members')

    cy.get('p')
      .contains('Select number of Teams')

    cy.contains('Create Teams!')
      .should('be.visible')
  })
  it('clicks Select / Deselect All button', () => {
    cy.get('input[type=button]')
      .click()

    cy.get('input[type=button]')
      .click()
  })
  // it('Correct number of people', () => {
  //     cy.get('.person')
  //       .its('length')
  //       .should('be', 10)
  //   })

  it('Drop down list contains number of teams to be selected', () => {
    cy.get('[data-cy=teamNumber')
      .select('4')
  })
  it('can select all checkboxes individually', () => {
    cy.get('form').find('[name=Pete]').click()
    cy.get('form').find('[name=Nigel]').click()
    cy.get('form').find('[name=Andre]').click()
    cy.get('form').find('[name=Sergio]').click()
    cy.get('form').find('[name=Basti]').click()
    cy.get('form').find('[name=Jovan]').click()
    cy.get('form').find('[name=Jeff]').click()
    cy.get('form').find('[name=Atlas]').click()
    cy.get('form').find('[name=Joe]').click()
    cy.get('form').find('[name=Sam]').click()
  })
  it('Clicks Create Teams! button', () => {
    cy.get('[data-cy=submit]')
      .click()
  })
})
