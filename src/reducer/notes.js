import {ADD_NOTE, DELETE_NOTE, EDIT_NOTE} from "../constants";

const initialState = [
    {
        id: 0,
        text: 'The beginning is the most important part of the work. - #Plato #quotes',
        tags: ['#Plato', '#quotes']
    },
    {
        id: 1,
        text: 'The important thing is not to stop questioning. #quotes #Einstein',
        tags: ['#quotes', '#Einstein']
    },
    {
        id: 2,
        text: 'After compilation, #JSX expressions become regular #JavaScript function',
        tags: ['#JSX', '#JavaScript']
    },
    {
        id: 3,
        text: 'Since #JSX is closer to #JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.',
        tags: ['#JSX', '#JavaScript']
    }
];

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE: {
            return [
                ...state,
                {
                    id: state.reduce((maxId, note) => Math.max(note.id, maxId), -1) + 1,
                    text: action.text,
                    tags: action.text.match(/([#][\S]*)/g)
                }
            ]
        }
        case DELETE_NOTE: {
            return state.filter(note => note.id !== action.id);
        }
        case EDIT_NOTE: {
            return state.map(note =>
                note.id === action.id ?
                    { ...note,
                        text: action.text,
                        tags: action.text.match(/([#][\S]*)/g)
                    } :
                    note
            )
        }
        default:
            return state;
    }
};

export default notesReducer;