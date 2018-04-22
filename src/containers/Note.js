import {connect} from 'react-redux'
import Note from '../components/Note'
import {deleteNote} from '../actions'
import {editNote} from "../actions/index";

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => {
    return {
        deleteNote: id => dispatch(deleteNote(id)),
        editNote: (id, text) => dispatch(editNote(id, text))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Note)