import { combineReducers } from 'redux'

import newTeams from './twoTeamsReducer'
import newPeopleReducer from './newPeopleReducer'
import error from './error'
import loading from './loading'
import getPeopleReducer from './getPeopleReducer'

export default combineReducers({
  newTeams,
  newPeopleReducer,
  error,
  loading,
  getPeopleReducer
})
