import { combineReducers } from 'redux'

import twoTeams from './twoTeamsReducer'
import addNewPeopleSuccess from './addNewPeopleSuccess'
import error from './error'

export default combineReducers({
  twoTeams,
  addNewPeopleSuccess,
  error
})
