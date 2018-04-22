import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ListItem, ListItemText, ListItemSecondaryAction} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Menu, {MenuItem} from 'material-ui/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Chip from 'material-ui/Chip';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            editing: false
        }
    }

    static propTypes = {
        note: PropTypes.object.isRequired,
        editNote: PropTypes.func.isRequired,
        deleteNote: PropTypes.func.isRequired
    };

    handleClickMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleCloseMenu = () => {
        this.setState({anchorEl: null});
    };

    editNote = () => {
        const {note, editNote} = this.props;
        this.setState({editing: true});
        editNote(note.id, note.text);
        this.handleCloseMenu();
    };

    deleteNote = () => {
        const {note, deleteNote} = this.props;
        deleteNote(note.id);
    };

    deleteTag = tag => () => {
        const {note, editNote} = this.props;
        note.text = note.text.replace(new RegExp(tag, 'g'), '');
        editNote(note.id, note.text);
    };
    customizeText = () => {
        const {note} = this.props;
        return note.text.split(' ').map(word => word.search('#') ? `${word} ` :
            <Chip
                key={word}
                label={`${word}`}
                onDelete={this.deleteTag(word)}
            />)
    };

    handleTextNoteChange = (event) => {
        this.props.note.text = event.target.value;
    };

    handleEditing = () => {
        this.editNote();
        this.setState({editing: false});
    };

    render() {
        const {anchorEl, editing} = this.state;
        const {note} = this.props;
        return (
            <ListItem>
                {editing ? <Grid container
                                 alignItems='center'
                                 justify='center'
                    >
                        <Grid item xs={10}>
                            <Input
                                label="Input note text"
                                fullWidth
                                defaultValue={note.text}
                                onChange={this.handleTextNoteChange}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                variant="raised"
                                size="small"
                                onClick={this.handleEditing}
                            >
                                Save
                            </Button>
                        </Grid>

                    </Grid>
                    : <ListItemText inset primary={this.customizeText()}/>
                }


                <ListItemSecondaryAction>
                    <IconButton onClick={this.handleClickMenu}>
                        <MoreVertIcon/>
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleCloseMenu}
                        PaperProps={{
                            style: {
                                maxHeight: 200,
                                width: 200,
                            },
                        }}
                    >
                        <MenuItem onClick={this.editNote}>Edit</MenuItem>
                        <MenuItem onClick={this.deleteNote}> Delete </MenuItem>
                    </Menu>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default Note;