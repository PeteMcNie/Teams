import { ERROR } from '../actions'

function errorMessage (error = null, action) {
    switch (action.type) {
        case ERROR:
            // return action.message OLD MESSAGE
            return ' Please enter a name that has at least two characters'

        default:
            return error
    }
}

export default errorMessage
