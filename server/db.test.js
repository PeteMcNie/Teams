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

test('postPeople returns the last person entered into the db', () => {
  expect.assertions(1)

  const newPeople = { names: ['Pete', 'Steve', 'Kim', 'Rikke']}

  const expected =  [
    { id: 1, name: 'Pete', isSelected: 0 },
    { id: 2, name: 'Nigel', isSelected: 0 },
    { id: 3, name: 'Andre', isSelected: 0 },
    { id: 4, name: 'Sergio', isSelected: 0 },
    { id: 5, name: 'Basti', isSelected: 0 },
    { id: 6, name: 'Jovan', isSelected: 0 },
    { id: 7, name: 'Jeff', isSelected: 0 },
    { id: 8, name: 'Atlas', isSelected: 0 },
    { id: 9, name: 'Joe', isSelected: 0 },
    { id: 10, name: 'Sam', isSelected: 0 },
    { id: 11, name: 'Pete', isSelected: 0 },
    { id: 12, name: 'Steve', isSelected: 0 },
    { id: 13, name: 'Kim', isSelected: 0 },
    { id: 14, name: 'Rikke', isSelected: 0 }
  ]
  
  return db.postPeople(newPeople, testDb)
    .then(person => {
      expect(person).toEqual(expected)
  })
})

test('deletePerson removes person from db', () => {
  expect.assertions(1)

  return db.deletePerson(2, testDb)
    .then(people => {
      expect(people).toBeTruthy()
    })
})

test('deletePerson returns a message if the person is not found', () => {
  expect.assertions(1)
  const id = '4000'
  return db.deletePerson(id, testDb)
    .then(response => {
      expect(response).toBeFalsy()
    })
})