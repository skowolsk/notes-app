import {ADD_NOTE, ADD_TAG, CHANGE_FILTER, DELETE_NOTE, DELETE_TAG, EDIT_NOTE} from "../constants";


export const addTag = title => ({
    type: ADD_TAG,
    title
});

export const deleteTag = title => ({
    type: DELETE_TAG,
    title
});

export const addNote = (text,tags) => ({
    type: ADD_NOTE,
    text
});

export const deleteNote = id => ({
    type: DELETE_NOTE,
    id
});

export const editNote = (id, text, tags) => ({
    type: EDIT_NOTE,
    id,
    text
});

export const changeFilter = (filter) => ({
    type: CHANGE_FILTER,
    filter
});