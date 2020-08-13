import { ERROR, ADDING_NEW_PEOPLE } from '../actions'

function errorMessage (error = null, action) {
  switch (action.type) {
    case ERROR:
      return action.message

    case ADDING_NEW_PEOPLE:
      error = null
      return error

    default:
      return error
  }
}

export default errorMessage
