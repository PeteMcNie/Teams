import { combineReducers } from 'redux'

import twoTeams from './twoTeamsReducer'
import newPeopleReducer from './newPeopleReducer'
import error from './error'
import loading from './loading'

export default combineReducers({
  twoTeams,
  newPeopleReducer,
  error,
  loading
})
