import { ERROR, ADDING_NEW_PEOPLE } from '../actions'

function errorMessage (error = null, action) {
  switch (action.type) {
    case ERROR:
      console.log('error reducer ', action.message)
      return action.message
      // return 'Names entered must have at least two characters.'

    case ADDING_NEW_PEOPLE:
      error = null
      return error

    default:
      return error
  }
}

export default errorMessage
