import { ERROR, ADDING_NEW_PEOPLE } from '../actions'

function errorMessage (error = null, action) {
    switch (action.type) {
        case ERROR:
            // return action.message OLD MESSAGE
            return ' Names entered must have at least two characters.'

        case ADDING_NEW_PEOPLE:
            return error = null

        default:
            return error
    }
}

export default errorMessage
