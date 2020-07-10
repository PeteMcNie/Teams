const env = require('../server/test.environment')
const db = require('./db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('getPeople returns all people', () => {
  expect.assertions(1)

  const expected = 10

  return db.getPeople(testDb)
    .then(people => {
      const actual = people.length
      expect(actual).toBe(expected)
    })
})
