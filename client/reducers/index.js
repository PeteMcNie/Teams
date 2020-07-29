import { combineReducers } from 'redux'

import twoTeams from './twoTeamsReducer'
import addNewPeopleSuccess from './addingNewPeople'

export default combineReducers({
  twoTeams,
  addNewPeopleSuccess
})
