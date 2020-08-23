/* global cy */

describe('New User loads home page', () => {
  beforeEach(() => {
    // reset and seed the database prior to every test
    cy.exec('npm run db:reset && npm run db:seed')
  })
  it('loads successfully', () => {
    cy.visit('/')
  })
})
