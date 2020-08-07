import { combineReducers } from 'redux'

import twoTeams from './twoTeamsReducer'
import newPeopleReducer from './newPeopleReducer'
import error from './error'
import loading from './loading'
import getPeopleReducer from './getPeopleReducer'

export default combineReducers({
  twoTeams,
  newPeopleReducer,
  error,
  loading,
  getPeopleReducer
})
