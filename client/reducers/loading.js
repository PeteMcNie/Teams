import {
    GETTING_PEOPLE,
    GETTING_PEOPLE_SUCCESS,
    ADDING_NEW_PEOPLE,
    ADD_NEW_PEOPLE_SUCCESS,
    TWO_TEAMS,
    ERROR,
    DELETING_PERSON,
    PERSON_DELETED_SUCCESS
} from '../actions'

const loading = (state = false, action) => {
    switch (action.type) {
        case GETTING_PEOPLE:
        case ADDING_NEW_PEOPLE:
        case DELETING_PERSON:
            return true

        case ERROR:
        case TWO_TEAMS:
        case ADD_NEW_PEOPLE_SUCCESS:
        case GETTING_PEOPLE_SUCCESS:
        case PERSON_DELETED_SUCCESS:
            return false

        default: 
            return state
    }
}

export default loading
