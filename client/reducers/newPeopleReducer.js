import { ADD_NEW_PEOPLE_SUCCESS } from '../actions'

function newPeopleReducer (state = [], action) {
    switch (action.type) {
        case ADD_NEW_PEOPLE_SUCCESS:
            return action.allPeople

        default:
            return state
    }
}

export default newPeopleReducer
