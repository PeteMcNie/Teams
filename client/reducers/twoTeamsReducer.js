import { TWO_TEAMS } from '../actions'

function twoTeams (state = {}, action) {
  switch (action.type) {
    case TWO_TEAMS:
      return action.twoTeams

    default:
      return state
  }
}

export default twoTeams
