import {
    GETTING_PEOPLE,
    ADDING_NEW_PEOPLE,
    ADD_NEW_PEOPLE_SUCCESS,
    TWO_TEAMS,
    ERROR
} from '../actions'

const loading = (state = false, action) => {
    switch (action.type) {
        case GETTING_PEOPLE:
        case ADDING_NEW_PEOPLE:
            return true

        case ERROR:
        case TWO_TEAMS:
        case ADD_NEW_PEOPLE_SUCCESS:
            return false

        default: 
            return state
    }
}

export default loading
