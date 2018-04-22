import {connect} from 'react-redux'
import NotesList from '../components/NotesList'
import {deleteNote} from '../actions'
import {SHOW_ALL} from "../constants";

const filterTag = (filter, defaultState) => {
    if(filter === SHOW_ALL){
        return defaultState;
    } else {
        return defaultState.filter( (elem) => {
            if(elem.tags !== null)
            return elem.tags.some( (subElem) => subElem === filter )
        });
    }
};

const mapStateToProps = (state) => {
    const notes = filterTag(state.filters.filter, state.notes);
    return {
        notes
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteNote: id => dispatch(deleteNote(id))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(NotesList)