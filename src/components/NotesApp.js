import React from 'react'
import AddNote from '../containers/AddNote'
import NotesList from '../containers/NotesList'
import Grid from 'material-ui/Grid';

const NotesApp = () => (
    <section>
        <Grid container>
            <Grid item xs={12}>
                <AddNote/>
            </Grid>
            <Grid item xs={12}>
                <NotesList/>
            </Grid>
        </Grid>
    </section>
);

export default NotesApp;