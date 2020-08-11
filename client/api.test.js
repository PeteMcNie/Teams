import { getPeople, newPeople, removePerson } from './api'

test('getPeople returns an array with all people objects', () => {
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

  return newPeople(addedPeople)
    .then(response => {
      console.log('api testing ', response)
    })
})
