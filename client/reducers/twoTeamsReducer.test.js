import reducer from './twoTeamsReducer'

import * as types from '../actions'

describe('twoTeamsReducer', () => {
  it('should return mulitple arrays', () => {
    expect(
      reducer([], {
        type: types.TEAMS,
        teams: [
          [
            { id: 1, name: 'Pete', isSelected: 0 },
            { id: 2, name: 'Nigel', isSelected: 0 }
          ],
          [
            { id: 3, name: 'Jeff', isSelected: 0 },
            { id: 4, name: 'Atlas', isSelected: 0 }
          ]
        ]
      })
    ).toEqual([
      [
        { id: 1, name: 'Pete', isSelected: 0 },
        { id: 2, name: 'Nigel', isSelected: 0 }
      ],
      [
        { id: 3, name: 'Jeff', isSelected: 0 },
        { id: 4, name: 'Atlas', isSelected: 0 }
      ]
    ])
  })
})
