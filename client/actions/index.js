import { getPeople, newPeople, removePerson } from '../api'

export const GETTING_PEOPLE = 'GETTING_PEOPLE'
export const GETTING_PEOPLE_SUCCESS = 'GETTING_PEOPLE_SUCCESS'

export function gettingPeople () {
  return {
    type: GETTING_PEOPLE
  }
}

export function getPeopleSuccess (people) {
  return {
    type: GETTING_PEOPLE_SUCCESS,
    people
  }
}

export function getPeopleError (message) {
  return {
    type: ERROR,
    message
  }
}

export function getPeopleAction () {
  return (dispatch) => {
    dispatch(gettingPeople())
    return getPeople()
      .then(people => {
        dispatch(getPeopleSuccess(people))
      })
      .catch(err => {
        dispatch(getPeopleError(err.message))
      })
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

export function addNewPeopleSuccess (allPeople) {
  return {
    type: ADD_NEW_PEOPLE_SUCCESS,
    allPeople
  }
}

export function addNewPeopleError (message) {
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
        dispatch(addNewPeopleSuccess(allPeople))
      })
      .catch(err => {
        dispatch(addNewPeopleError(err.message))
      })
  }
}

export const DELETING_PERSON = 'DELETING PERSON'
export const PERSON_DELETED_SUCCESS = 'PERSON_DELETED_SUCCESS'

export function deletingPerson () {
  return {
    type: DELETING_PERSON
  }
}

export function deletedPersonSuccess () {
  return {
    type: PERSON_DELETED_SUCCESS
  }
}

export function deletePersonError (message) {
  return {
    type: ERROR,
    message
  }
}

export function deletePerson (id) {
  return (dispatch) => {
    dispatch(deletingPerson())
    return removePerson(id)
      .then(dispatch(deletedPersonSuccess(id))) // id of person deleted is available here, not being used currently.
      .then(dispatch(getPeopleAction()))
      .catch(err => {
        dispatch(deletePersonError(err.message))
      })
  }
}

export const TWO_TEAMS = 'TWO_TEAMS'

export const twoTeams = (teams) => {
  return {
    type: TWO_TEAMS,
    teams
  }
}
