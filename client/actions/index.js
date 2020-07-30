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
       // console.error('hi', err.message) BLOCKED ON THE ERROR PROCESS< HOW SHOULD I DEAL WITH THIS? WHAT SHOULD I DISPLAY TO THE CLIENT? WHY IS THE ERROR MESSAGE I AM GETTING SAYING ADD NEW PEOPLE SUCCESS....SOMETHING
       dispatch(addNewPeopleError(err.message))
      })
  }
}


