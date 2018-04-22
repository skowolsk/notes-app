import { CHANGE_FILTER, SHOW_ALL } from '../constants'

const stateInitial = {
    filter: SHOW_ALL
};

export default (state = stateInitial, action) => {
    switch (action.type) {
        case CHANGE_FILTER: {
            return {
                filter: action.filter
            }
        }
        default: {
            return state;
        }
    }
}