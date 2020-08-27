/* global cy */

describe('Past User visits site', () => {
  beforeEach(() => {
    // reset and seed the database prior to every test
    cy.exec('npm run db:reset && npm run db:seed')
  })
  it('Enters site and goes to add new people', () => {
    cy.visit('/')

    cy.contains('Add New People')
      .click()

    cy.contains('Add Person')
      .click()

    cy.contains('Add Person')
      .click()

    cy.contains('Add Person')
      .click()

    cy.contains('Add Person')
      .click()

    cy.contains('Remove')
      .click()

    cy.contains('Remove')
      .click()

    cy.contains('Submit')
      .click()

    cy.contains('Create Teams')
      .click()

    cy.get('form').find('[name=Andre]').click({ force: true })
    cy.get('form').find('[name=Sergio]').click({ force: true })
    cy.get('form').find('[name=Basti]').click({ force: true })
    cy.get('form').find('[name=Jovan]').click({ force: true })
    cy.get('form').find('[name=Jeff]').click({ force: true })
    cy.get('form').find('[name=Atlas]').click({ force: true })
    cy.get('form').find('[name=Joe]').click({ force: true })

    cy.get('form').find('[name=Basti]').click({ force: true })
    cy.get('form').find('[name=Jovan]').click({ force: true })

    cy.get('[data-cy=teamNumber')
      .select('3')

    cy.get('[data-cy=submit]')
      .click()

    cy.contains('Re-shuffle')
      .click()

    cy.contains('Add New People')
      .click()

    cy.contains('Add Person')
      .click()

    cy.get('form').within(() => {
      cy.get('input:first').should('have.attr', 'placeholder', 'Enter name...')
    }).type('0')

    cy.contains('Submit')
      .click()

    cy.contains('Remove')
      .click()

    cy.contains('Add Person')
      .click()

    cy.get('form').within(() => {
      cy.get('input:first').should('have.attr', 'placeholder', 'Enter name...')
    }).type('pppppppppppppppppppppppppppppppppppppppppppppppppp')

    cy.contains('Submit')
      .click()

    cy.contains('Remove')
      .click()

    cy.contains('Add Person')
      .click()

    cy.contains('Add Person')
      .click()

    cy.get('form').within(() => {
      cy.get('input').eq(0)
    }).type('Pablo')

    cy.get('form').within(() => {
      cy.get('input').eq(1)
    }).type('Sam')

    cy.contains('Submit')
      .click()

    cy.contains('Create Teams')
      .click()

    cy.contains('Add New People')
      .click()

    cy.contains('Add Person')
      .click()

    cy.contains('Add Person')
      .click()

    cy.contains('Add Person')
      .click()

    cy.contains('Add Person')
      .click()

    cy.contains('Add Person')
      .click()

    cy.contains('Add Person')
      .click()

    cy.get('form').within(() => {
      cy.get('input').eq(0)
    }).type('Rikke')

    cy.get('form').within(() => {
      cy.get('input').eq(1)
    }).type('Kim')

    cy.get('form').within(() => {
      cy.get('input').eq(2)
    }).type('Ari')

    cy.get('form').within(() => {
      cy.get('input').eq(3)
    }).type('Jake')

    cy.get('form').within(() => {
      cy.get('input').eq(4)
    }).type('Zac')

    cy.get('form').within(() => {
      cy.get('input').eq(5)
    }).type('Jonty')

    cy.contains('Submit')
      .click()

    cy.contains('Create Teams')
      .click()

    cy.get('[data-cy=peopleList]')
      .children()
      .should('have.length', 18)

    cy.get('input[type=button]')
      .click()

    cy.get('[data-cy=teamNumber')
      .select('8')

    cy.get('[data-cy=submit]')
      .click()
  })
  it('Resets the database', () => {
    cy.contains('Re-shuffle')
      .click()
  })
})
