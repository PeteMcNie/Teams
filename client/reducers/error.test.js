import reducer from './error'

import * as types from '../actions'

describe('error reducer', () => {
  it('should return null if there is no error', () => {
    expect(
      reducer(undefined, {})
    ).toBeNull()
  })

  it('should return null if it is adding new people', () => {
    expect(
      reducer([], {
        type: types.ADDING_NEW_PEOPLE
      })
    ).toBeNull()
  })

  it('should return Names entered must have at least... if there is an error adding new people', () => {
    expect(
      reducer([], {
        type: types.ERROR
      })
    ).toBe('Names entered must have at least two characters.')
  })
})
