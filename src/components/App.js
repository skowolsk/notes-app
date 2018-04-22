import React from 'react'
import SideBar from './SideBar'
import NotesApp from './NotesApp'
import Grid from 'material-ui/Grid';

const App = () => (
    <main className="main-content">
        <Grid container>
            <Grid item xs={12} sm={6}>
                <SideBar/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <NotesApp/>
            </Grid>
        </Grid>
    </main>
);

export default App;