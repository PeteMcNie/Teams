import { shuffleSelectedPeople } from './sortFunctions'

describe('sortFunctions pass all arrayContaining tests', () => {
  const expected = [
    { id: 1, name: 'bob' },
    { id: 2, name: 'pete' },
    { id: 3, name: 'sam' },
    { id: 4, name: 'joe' },
    { id: 5, name: 'kim' },
    { id: 6, name: 'rikke' },
    { id: 7, name: 'ari' },
    { id: 8, name: 'emily' }
  ]

  it('matches all elements in original array', () => {
    expect([
      { id: 1, name: 'bob' },
      { id: 2, name: 'pete' },
      { id: 3, name: 'sam' },
      { id: 4, name: 'joe' },
      { id: 5, name: 'kim' },
      { id: 6, name: 'rikke' },
      { id: 7, name: 'ari' },
      { id: 8, name: 'emily' }
    ]).toEqual(expect.arrayContaining(expected))
  })

  it('does not match if a person is missing', () => {
    expect([
      { id: 1, name: 'bob' },
      { id: 2, name: 'pete' },
      { id: 3, name: 'sam' },
      { id: 5, name: 'kim' },
      { id: 6, name: 'rikke' },
      { id: 7, name: 'ari' },
      { id: 8, name: 'emily' }
    ]).not.toEqual(expect.arrayContaining(expected))
  })
})

describe('sortFunctions sort people into the correct amount of teams', () => {
  const expected = [
    { id: 1, name: 'bob' },
    { id: 2, name: 'pete' },
    { id: 3, name: 'sam' },
    { id: 4, name: 'joe' },
    { id: 5, name: 'kim' },
    { id: 6, name: 'rikke' },
    { id: 7, name: 'ari' },
    { id: 8, name: 'emily' },
    { id: 9, name: 'bob' },
    { id: 10, name: 'pete' },
    { id: 11, name: 'sam' },
    { id: 12, name: 'joe' },
    { id: 13, name: 'kim' },
    { id: 14, name: 'rikke' },
    { id: 15, name: 'ari' },
    { id: 16, name: 'emily' },
    { id: 17, name: 'bob' },
    { id: 18, name: 'pete' },
    { id: 19, name: 'sam' },
    { id: 20, name: 'joe' },
    { id: 21, name: 'kim' },
    { id: 22, name: 'rikke' },
    { id: 23, name: 'ari' }
  ]

  it('sortSelectedPeople returns an object with two arrays inside', () => {
    const twoTeams = 2
    const arrays = shuffleSelectedPeople(expected, twoTeams)

    expect(arrays).toHaveLength(2)
    expect(arrays[0]).toHaveLength(12)
  })

  it('sortSelectedPeople returns an object with three arrays inside', () => {
    const threeTeams = 3
    const arrays = shuffleSelectedPeople(expected, threeTeams)

    expect(arrays).toHaveLength(3)
    expect(arrays[0]).toHaveLength(8)
    expect(arrays[2]).toHaveLength(7)
  })

  it('sortSelectedPeople returns an object with four arrays inside', () => {
    const fourTeams = 4
    const arrays = shuffleSelectedPeople(expected, fourTeams)

    expect(arrays).toHaveLength(4)
    expect(arrays[0]).toHaveLength(6)
    expect(arrays[3]).toHaveLength(5)
  })

  it('sortSelectedPeople returns an object with five arrays inside', () => {
    const fiveTeams = 5
    const arrays = shuffleSelectedPeople(expected, fiveTeams)

    expect(arrays).toHaveLength(5)
    expect(arrays[0]).toHaveLength(5)
    expect(arrays[4]).toHaveLength(4)
  })

  it('sortSelectedPeople returns an object with six arrays inside', () => {
    const sixTeams = 6
    const arrays = shuffleSelectedPeople(expected, sixTeams)

    expect(arrays).toHaveLength(6)
    expect(arrays[0]).toHaveLength(4)
    expect(arrays[5]).toHaveLength(3)
  })

  it('sortSelectedPeople returns an object with seven arrays inside', () => {
    const sevenTeams = 7
    const arrays = shuffleSelectedPeople(expected, sevenTeams)

    expect(arrays).toHaveLength(7)
    expect(arrays[0]).toHaveLength(4)
    expect(arrays[6]).toHaveLength(3)
  })

  it('sortSelectedPeople returns an object with eight arrays inside', () => {
    const eightTeams = 8
    const arrays = shuffleSelectedPeople(expected, eightTeams)

    expect(arrays).toHaveLength(8)
    expect(arrays[0]).toHaveLength(3)
    expect(arrays[7]).toHaveLength(2)
  })

  it('sortSelectedPeople returns an object with nine arrays inside', () => {
    const nineTeams = 9
    const arrays = shuffleSelectedPeople(expected, nineTeams)

    expect(arrays).toHaveLength(9)
    expect(arrays[0]).toHaveLength(3)
    expect(arrays[8]).toHaveLength(2)
  })

  it('sortSelectedPeople returns an object with ten arrays inside', () => {
    const tenTeams = 10
    const arrays = shuffleSelectedPeople(expected, tenTeams)

    expect(arrays).toHaveLength(10)
    expect(arrays[0]).toHaveLength(3)
    expect(arrays[9]).toHaveLength(2)
  })
})
