import { ERROR } from '../actions'

function error (error = null, action) {
    switch (action.type) {
        case ERROR:
            return action.message

        default:
            return error
    }
}

export default error
