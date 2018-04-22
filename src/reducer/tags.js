
import {ADD_TAG, DELETE_TAG} from "../constants";

const initialState = [
    {
        title: '#Plato'
    },
    {
        title: '#quotes'
    },
    {
        title: '#Einstein'
    },
    {
        title: '#JSX'
    },
    {
        title: '#JavaScript'
    }
];


const tagsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TAG: {
            if(state.some(elem => elem.title.toLowerCase() === action.title.toLowerCase())){
                return state;
            } else {
                return [
                    ...state,
                    {
                        title: action.title.replace(/ /g, "_")
                    }
                ];
            }
        }
        case DELETE_TAG: {
            return state.filter(tag => tag.title !== action.title);
        }
        default:
            return state;
    }
};

export default tagsReducer;