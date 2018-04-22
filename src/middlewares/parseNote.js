import {addTag} from "../actions/index"
import {ADD_NOTE, EDIT_NOTE} from "../constants";

const parseNote = (store) => dispatch => action => {
    switch (action.type) {
        case ADD_NOTE:
        case EDIT_NOTE: {
            const tags = action.text.match(/([#][\S]*)/g);
            if (tags !== null) {
                tags.map((tag) => dispatch(addTag(tag)))
            }
        }

    }
    dispatch(action)
};

export default parseNote;