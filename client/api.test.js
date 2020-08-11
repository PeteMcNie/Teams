import { getPeople, newPeople, removePerson } from './api'

const request = require('supertest')

jest.mock('./api', () => {
  return {
    getPeople: jest.fn(),
    newPeople: jest.fn(),
    removePerson: jest.fn()
  }
})

test('getPeople returns an array with all people objects', () => {
  getPeople.mockImplementation(() => Promise.resolve(
    [
      { id: 1, name: 'Pete', isSelected: 0 },
      { id: 2, name: 'Nigel', isSelected: 0 },
      { id: 3, name: 'Andre', isSelected: 0 },
      { id: 4, name: 'Sergio', isSelected: 0 },
      { id: 5, name: 'Basti', isSelected: 0 },
      { id: 6, name: 'Jovan', isSelected: 0 },
      { id: 7, name: 'Jeff', isSelected: 0 }
    ]
  ))

  return getPeople()
    .then(people => {
      expect(people[0].name).toBe('Pete')
      expect(people[0].id).toBe(1)
      expect(people[1].name).toBe('Nigel')
      expect(people[1].id).toBe(2)
    })
})

test('newPeople returns an array with all people objects', () => {
  const addedPeople = { names: ['Pete', 'Sam'] }

  newPeople.mockImplementation(() => Promise.resolve({
    body:
    [
      { id: 1, name: 'Pete', isSelected: 0 },
      { id: 2, name: 'Nigel', isSelected: 0 },
      { id: 3, name: 'Andre', isSelected: 0 },
      { id: 4, name: 'Sergio', isSelected: 0 },
      { id: 5, name: 'Basti', isSelected: 0 },
      { id: 6, name: 'Jovan', isSelected: 0 },
      { id: 7, name: 'Jeff', isSelected: 0 },
      { id: 8, name: 'Pete', isSelected: 0 },
      { id: 9, name: 'Sam', isSelected: 0 }
    ]
  }))

  return newPeople(addedPeople)
    .then(response => {
      expect(response.body[0].name).toBe('Pete')
      expect(response.body[6].name).toBe('Jeff')
      expect(response.body[7].name).toBe('Pete')
      expect(response.body[8].name).toBe('Sam')
    })
})

test('removePerson API returns a message that confirms deletion', () => {
    removePerson.mockImplementation(() => Promise.resolve({
        body: {
            id: 4
        }
    }))

    return removePerson(4)
        .then(response => {
            console.log('api test ', response)
            expect(response.body.id).toBe(4)
        })
})