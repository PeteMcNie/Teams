import { sortSelectedPeople } from './sortFunctions'

test('sortSelectedPeople returns an object with two arrays inside', () => {
  const object = [
    { id: 1, name: 'bob' }, 
    { id: 2, name: 'pete' }, 
    { id: 3, name: 'sam' }, 
    { id: 4, name: 'joe' }, 
    { id: 5, name: 'kim' }, 
    { id: 6, name: 'rikke' }, 
    { id: 7, name: 'ari' }, 
    { id: 8, name: 'emily' }
  ]

  // const expected = { teams: {
  //   teamOne: [{ id: 1, name: 'bob' }, { id: 2, name: 'pete' }, { id: 3, name: 'sam' }, { id: 4, name: 'joe' }],
  //   teamTwo: [{ id: 5, name: 'kim' }, { id: 6, name: 'rikke' }, { id: 7, name: 'ari' }, { id: 8, name: 'emily' }]
  // } }

  const expected = sortSelectedPeople(object)

  expect(expected.teams.teamOne).toHaveLength(4)
  expect(expected.teams.teamOne[1]).toHaveProperty('id')
})
