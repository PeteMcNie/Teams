import { sortSelectedPeople } from './sortFunctions'

xtest('sortSelectedPeople returns an object with people', () => {
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

  const test = sortSelectedPeople(object)

  expect(test).toHaveLength(5)
  expect(test[2]).toBe('sam')
})
