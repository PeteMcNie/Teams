import { ERROR, ADDING_NEW_PEOPLE } from '../actions'

function errorMessage (error = null, action) {
  switch (action.type) {
    case ERROR:
      // return action.message OLD MESSAGE  NEED TO UPDATE ERROR MESSAGE IN JOI SO IT CAN DISPLAYED TO CLIENT
      return 'Names entered must have at least two characters.'

    case ADDING_NEW_PEOPLE:
      error = null
      return error

    default:
      return error
  }
}

export default errorMessage
