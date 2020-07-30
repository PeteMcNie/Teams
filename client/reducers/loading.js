import {
    ADDING_NEW_PEOPLE,
    TWO_TEAMS,
    ERROR
} from '../actions'

const loading = (state = false, action) => {
    switch (action.type) {
        case ADDING_NEW_PEOPLE:
            return true

        case ERROR:
        case TWO_TEAMS:
            return false

        default: 
            return state
    }
}

export default loading
