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

  it('should return the correct error if not enough characters are entered', () => {
    expect(
      reducer([], {
        type: types.ERROR,
        message: 'Names entered must have at least two characters.'
      })
    ).toEqual('Names entered must have at least two characters.')
  })

  it('should return the correct error if too many characters are entered', () => {
    expect(
      reducer([], {
        type: types.ERROR,
        message: 'Names entered cannot be longer than 30 characters'
      })
    ).toBe('Names entered cannot be longer than 30 characters')
  })

  it('should return the correct error if special characters or numbers are entered', () => {
    expect(
      reducer([], {
        type: types.ERROR,
        message: 'Names entered cannot contain numbers or special characters'
      })
    ).toBe('Names entered cannot contain numbers or special characters')
  })
})
