import { getPeople, newPeople } from '../api'

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
    console.log('getPeopleAction hit')
    dispatch(gettingPeople())
    return getPeople()
      .then(people => {
        console.log('actions.js ', people)
        dispatch(getPeopleSuccess(people))
      })
      .catch(err => {
        dispatch(getPeopleError(err.message))
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
       // console.log('actions.js', allPeople)
       dispatch(addNewPeopleSuccess(allPeople))
     })
     .catch(err => {
       // console.error('hi lane', err.message) 
       dispatch(addNewPeopleError(err.message))
      }) 
  }
}

export const DELETING_PERSON = 'DELETING PERSON'
export const PERSON_DELETED_SUCCESS = 'PERSON_DELETED_SUCCESS'

export function deletePerson (id) {
  return (dispatch) => {
    console.log('actions ', id)
  }
}


