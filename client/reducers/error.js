import { ERROR } from '../actions'

function errorMessage (error = null, action) {
    switch (action.type) {
        case ERROR:
            return action.message

        default:
            return error
    }
}

export default errorMessage
