import { sortSelectedPeople } from './sortFunctions'

test('sortSelectedPeople returns an object with two arrays inside', () => {
  const object = [{ id: 1, name: 'bob' }, { id: 2, name: 'pete' }, { id: 3, name: 'sam' }, { id: 4, name: 'joe' }, { id: 5, name: 'kim' }, { id: 6, name: 'rikke' }, { id: 7, name: 'ari' }, { id: 8, name: 'emily' }]

  const expected = { teams: {
    teamOne: [{ id: 1, name: 'bob' }, { id: 2, name: 'pete' }, { id: 3, name: 'sam' }, { id: 4, name: 'joe' }],
    teamTwo: [{ id: 5, name: 'kim' }, { id: 6, name: 'rikke' }, { id: 7, name: 'ari' }, { id: 8, name: 'emily' }]
  } }

  const oneObject = { id: 2, name: 'pete' }

  const test = sortSelectedPeople(object)
  console.log('TEST: ', test)
  // expect(test).toHaveLength(5)
  expect(test.teams.teamOne).toHaveLength(4)
  expect(test.teams.teamOne[1]).toHaveProperty('id')
  // expect(test.teams).toEqual(expected)
})
