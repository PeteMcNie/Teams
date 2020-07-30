import { combineReducers } from 'redux'

import twoTeams from './twoTeamsReducer'
import newPeopleReducer from './newPeopleReducer'
import error from './error'

export default combineReducers({
  twoTeams,
  newPeopleReducer,
  error
})
