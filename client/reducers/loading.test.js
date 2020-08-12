import reducer from './loading'

import * as people from '../actions'

describe('loading reducer', () => {
  it('should return the true if getting people is pending', () => {
    expect(
      reducer([], {
        type: people.GETTING_PEOPLE
      })
    ).toEqual(true)
  })

  it('should return the true if adding people is pending', () => {
    expect(
      reducer([], {
        type: people.ADDING_NEW_PEOPLE
      })
    ).toEqual(true)
  })

  it('should return the true if deletoing people is pending', () => {
    expect(
      reducer([], {
        type: people.DELETING_PERSON
      })
    ).toEqual(true)
  })

  it('should return the false if an error displayed', () => {
    expect(
      reducer([], {
        type: people.ERROR
      })
    ).toEqual(false)
  })

  it('should return the false if teams have been created', () => {
    expect(
      reducer([], {
        type: people.TWO_TEAMS
      })
    ).toEqual(false)
  })

  it('should return the false if people are added successfully', () => {
    expect(
      reducer([], {
        type: people.ADD_NEW_PEOPLE_SUCCESS
      })
    ).toEqual(false)
  })

  it('should return the false if getting all people is successful', () => {
    expect(
      reducer([], {
        type: people.GETTING_PEOPLE_SUCCESS
      })
    ).toEqual(false)
  })

  it('should return the false if person is deleted successfully', () => {
    expect(
      reducer([], {
        type: people.PERSON_DELETED_SUCCESS
      })
    ).toEqual(false)
  })
})
