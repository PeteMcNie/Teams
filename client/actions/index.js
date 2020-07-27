import { newPeople } from '../api'

export const TWO_TEAMS = 'TWO_TEAMS'

export const twoTeams = (teams) => {
  return {
    type: TWO_TEAMS,
    teams
  }
}

export const ADDING_NEW_PEOPLE = 'ADDING_NEW_PEOPLE'
export const ADD_NEW_PEOPLE_SUCCESS = 'ADD_NEW_PEOPLE_SUCCESS'
export const ERROR = 'ERROR'

export function addingNewPeople () {
  return {
    type: ADDING_NEW_PEOPLE
  }
}

export function addNewPeopleSuccess (people) {
  return {
    type: ADD_NEW_PEOPLE_SUCCESS,
    people
  }
}

export function addNewPeopleError ({ message }) {
  return {
    type: ERROR,
    message
  }
}

export function addPeople (people) {
  return (dispatch) => {
    dispatch(addingNewPeople())
    return newPeople(people)
     .then(allPeople => {
       console.log('actions.js', allPeople)
       dispatch(addNewPeopleSuccess(allPeople))
     })
     .catch(err => dispatch(addNewPeopleError(err.message)))
  }
}


