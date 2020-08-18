import reducer from './newPeopleReducer'

import * as types from '../actions'

describe('newPeopleReducer', () => {
  it('should return all people if successful', () => {
    expect(
      reducer([], {
        type: types.ADD_NEW_PEOPLE_SUCCESS,
        allPeople: [
          { id: 1, name: 'Pete', isSelected: 0 },
          { id: 2, name: 'Nigel', isSelected: 0 }
        ]
      })
    ).toEqual([
      { id: 1, name: 'Pete', isSelected: 0 },
      { id: 2, name: 'Nigel', isSelected: 0 }
    ])
  })
})
