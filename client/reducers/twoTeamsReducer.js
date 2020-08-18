import { TEAMS } from '../actions'

function newTeams (state = [], action) {
  switch (action.type) {
    case TEAMS:
      return action.teams

    default:
      return state
  }
}

export default newTeams
