import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import {addNote} from "../actions/index";
import Grid from 'material-ui/Grid'


class AddNote extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        textNote: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            textNote: ''
        }
    }

    handleTextNoteChange = (event) => {
        this.setState({textNote: event.target.value});
    };
    handleSubmit = () => {
        const {dispatch} = this.props;
        if(this.state.textNote){
            dispatch(addNote(this.state.textNote));
        }
        this.setState({textNote: ''});
    };

    render() {
        return (
            <Grid container
                  alignItems='center'
                  justify='center'
            >
                <Grid item xs={10}>
                    <TextField
                        placeholder="I wanna go to #shop"
                        margin="normal"
                        fullWidth
                        value={this.state.textNote}
                        onChange={this.handleTextNoteChange}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button
                        variant="raised"
                        onClick={this.handleSubmit}
                    >
                        ADD
                    </Button>
                </Grid>
            </Grid>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        state: state.notes
    }
};

export default connect(mapStateToProps)(AddNote)