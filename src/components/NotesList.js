import React from 'react'
import PropTypes from 'prop-types'
import List from 'material-ui/List';
import Note from '../containers/Note'

const NotesList = (props) => (
    <List>
        {
            props.notes.map( note => <Note key={note.id} note={note} /> )
        }
    </List>

);

NotesList.propTypes = {
    notes: PropTypes.array.isRequired
};

export default NotesList;