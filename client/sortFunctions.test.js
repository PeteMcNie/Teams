import { sortSelectedPeople } from './sortFunctions'

xtest('sortSelectedPeople returns an object with people', () => {
  const object = {['bob', 'pete', 'sam', 'joe', 'kim', 'rikke', 'ari', 'emily']}

  const test = sortSelectedPeople(object)

  expect(test).toHaveLength(5)
  expect(test[2]).toBe('sam')
})