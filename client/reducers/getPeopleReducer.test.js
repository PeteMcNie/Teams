import reducer from './getPeopleReducer'

import * as types from '../actions'

describe('getPeopleReducer', () => {
  it('should return all people if successful', () => {
    expect(
      reducer([], {
        type: types.GETTING_PEOPLE_SUCCESS,
        people: [
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
