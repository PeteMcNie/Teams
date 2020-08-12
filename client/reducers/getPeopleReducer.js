import { GETTING_PEOPLE_SUCCESS } from '../actions'

function getPeopleReducer (state = [], action) {
  switch (action.type) {
    case GETTING_PEOPLE_SUCCESS:
      return action.people

    default:
      return state
  }
}

export default getPeopleReducer
